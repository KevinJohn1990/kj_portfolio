import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import * as THREE from 'three';
import { PointsMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//  import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
// import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';
import * as dat_gui_utils from './utils/dat_gui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'kj_portfolio';
  constructor() {
    // this.animate.prototype.bind = this;
  }

  gui = dat_gui_utils.NewGuiObject(); // new dat.GUI();
  frame = 0;
  world = {
    plane: {
      width: 400,
      height: 400,
      widthSegments: 50,
      heightSegments: 50,
    },
  };
  MAX_VAL = 500;
  MAX_VAL_SEG = 100;

  raycaster = new THREE.Raycaster();
  // console.log("ray:", raycaster); // laser pointer
  // raycaster - little laser pointer - points to screen

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  mouse = {
    x: undefined,
    y: undefined,
  };
  // renderer
  renderer = new THREE.WebGLRenderer();

  planeGeometry: THREE.PlaneGeometry;
  // MeshBasicMaterial - does not react to light
  // MeshPhongMaterial - for this material we need light
  planeMaterial: THREE.MeshPhongMaterial;
  planeMesh: THREE.Mesh;

  starGeometry: THREE.BufferGeometry;
  starMaterial: THREE.PointsMaterial;
  stars: THREE.Points;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log('Renderer: ', this.renderer);
    // this.animate.bind(this);
    // this.loadScene.bind(this);
    this.initDatGui();

    this.loadScene();

    window.addEventListener('resize', (e) => {
      console.log('window resize');
      this.setRendererSize();
    });

    window.addEventListener('mousemove', (e) => {
      // browser (top left (0,0))
      // but three js (0,0,0) => center of screen
      this.mouse.x = (e.clientX / innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / innerHeight) * 2 + 1;
      // console.log(mouse);
    });

    this.miscFuncs();
  }

  miscFuncs() {
    document.addEventListener('wheel', (e) => {
      console.log('on wheel');
      if (this.camera) {
        // console.log('c: ', this.camera.position);
        // console.log('orb: ', this.orbitObj.object.position);
        console.log('orb: ', this.orbitObj);
      }
    });
    document.querySelector('#viewBtn').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Camera: ', this.camera);
      // const a = 1000;
      // const b = 700;
      // const c = -1000;
      // const d = -700;
      // console.log('cam position: ', this.camera.position);
      // console.log('cam rotation: ', this.camera.rotation);

      gsap.to(this.planeMesh.rotation, {
        x: 1.57,
        ease: 'power3.inOut',
        duration: 1,
        onComplete: () => {
          this.addAnotherCubeMesh();
          gsap.to(this.camera.position, {
            z: this.camera.position.z - 1000,
            ease: 'power3.inOut',
            duration: 2,
            onComplete: () => {
              this.orbitObj.object.position.x = this.camera.position.x;
              this.orbitObj.object.position.y = this.camera.position.y;
              this.orbitObj.object.position.z = this.camera.position.z;

              this.orbitObj.target.x = 0;
              this.orbitObj.target.y = 0;
              this.orbitObj.target.z = -1000;
              gsap.to(this.camera.position, {
                z: this.camera.position.z + 50,
                ease: 'power3.inOut',
                duration: 2,
              });
            },
          });
        },
      });

      //

      // gsap.to('#container', {
      //   opacity: 0,
      //   duration: 1.5,
      //   y: 0,
      //   ease: 'expo',
      // });
      // gsap.to(this.camera.position, {
      //   z: 20,
      //   ease: 'power3.inOut',
      //   duration: 2,
      // });

      // gsap.to(this.camera.rotation, {
      //   x: 1.57,
      //   ease: 'power3.inOut',
      //   duration: 2,
      // });

      // gsap.to(this.camera.position, {
      //   y: 1000,
      //   ease: 'power3.in',
      //   duration: 1.5,
      //   delay: 2,
      //   onComplete: () => {
      //     this.showAnotherMesh();
      //     // window.location = 'https://www.google.com' as any;
      //   },
      // });
    });

    gsap.to('#idH1', {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo',
    });
    gsap.to('#msgId', {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: 'expo',
    });
    gsap.to('#viewBtn', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'expo',
    });
  }

  initDatGui() {
    const gui = this.gui;
    const world = this.world;
    const MAX_VAL = this.MAX_VAL;
    const MAX_VAL_SEG = this.MAX_VAL_SEG;
    // Adding variables
    const func = () => {
      this.updatePlaneMeshGeometry();
    };
    dat_gui_utils.AddGuiVariable(gui, world.plane, 'width', 1, MAX_VAL, func);
    dat_gui_utils.AddGuiVariable(gui, world.plane, 'height', 1, MAX_VAL, func);

    dat_gui_utils.AddGuiVariable(
      gui,
      world.plane,
      'widthSegments',
      1,
      MAX_VAL_SEG,
      func
    );

    dat_gui_utils.AddGuiVariable(
      gui,
      world.plane,
      'heightSegments',
      1,
      MAX_VAL_SEG,
      func
    );
  }

  // basically canvas html element - that runs WebGL
  // WebGL - framework to run 3d on web
  // the below object - gives us the option to rotate the object (using the mouse)
  private setRendererSize() {
    this.renderer.setSize(innerWidth, innerHeight);
  }

  orbitObj: OrbitControls;
  loadScene() {
    // console.log('load This: ', this);
    const renderer = this.renderer;
    const camera = this.camera;
    const world = this.world;
    const scene = this.scene;
    // set the canvas size (width, height)
    this.setRendererSize();
    // renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    //************************************************************** */

    this.orbitObj = new OrbitControls(this.camera, this.renderer.domElement);
    // move away
    camera.position.z = 50;

    //plane geometry,  (width, height, ...segments)
    this.planeGeometry = new THREE.PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    );
    // MeshBasicMaterial - does not react to light
    // MeshPhongMaterial - for this material we need light
    let b = THREE.FlatShading;
    this.planeMaterial = new THREE.MeshPhongMaterial({
      // color: 0xff0000,
      side: THREE.DoubleSide,
      flatShading: true,
      vertexColors: true,
    });
    this.planeMesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    // add animation
    scene.add(this.planeMesh);

    this.setPosition(this.planeMesh);

    // (color, intensity)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    // x, y, z
    light.position.set(-1, -1, 1);
    // light.position.set(0, 0, 1);
    scene.add(light);

    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    // x, y, z
    backLight.position.set(1, 1, -1);
    // backLight.position.set(0, 0, -1);
    scene.add(backLight);

    // star objects
    // point objects
    // like a mesh - but it does not connect with each other
    this.starGeometry = new THREE.BufferGeometry();
    this.starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });
    // console.log("start material: ", starMaterial);

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      let x = Math.random() - 0.5;
      let y = Math.random() - 0.5;
      let z = Math.random() - 0.5;
      x *= 2000;
      y *= 2000;
      z *= 2000;
      starVertices.push(x, y, z);
    }
    this.starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    this.stars = new THREE.Points(this.starGeometry, this.starMaterial);
    scene.add(this.stars);

    this.animate();
  }

  animate() {
    // console.log('animate This: ', this);
    const renderer = this.renderer;
    const scene = this.scene;
    const mouse = this.mouse;
    const camera = this.camera;
    let frame = this.frame;
    const planeMesh = this.planeMesh;
    const raycaster = this.raycaster;

    requestAnimationFrame(() => {
      return this.animate();
    });
    renderer.render(scene, camera);
    raycaster.setFromCamera(mouse, camera);
    frame += 0.1;

    const mesh = planeMesh;
    const { array, originalPosition, randomValues } = mesh.geometry.attributes[
      'position'
    ] as any;
    // console.log('arr, org, rand', array, originalPosition, randomValues);
    // The below code block - is for wave like motion of the planeMesh (using sin and cosine functions)
    if (originalPosition && randomValues) {
      for (let i = 0; i < array.length; i += 3) {
        array[i] =
          originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;
        array[i + 1] =
          originalPosition[i + 1] +
          Math.sin(frame + randomValues[i + 1]) * 0.001;
        // if (i == 0) {
        //   // console.log(Math.cos(frame + randomValues[i]));
        // }
      }
      mesh.geometry.attributes['position'].needsUpdate = true;
    }

    // below code block is to set the color of the mouse move (covered points)/intersecting points
    // to give a hover light kind of effect
    const intersects = raycaster.intersectObject(planeMesh);
    if (intersects.length > 0) {
      // console.log(intersects[0].object.geometry);

      // each array object
      // - has face attribute (face-> a, b,c)
      // a- index of mesh vertex
      // we know before that mesh vertexes are set of arrays
      //    eg: [0,0,1,1,2,23,23,12 ....]
      //      here 1st 3 members of the array are the (x,y,z) => value of 1st vertex
      //      and so on
      //      so the face (a, b, c )attributes points to these vertex
      // intersects[0].object.geometry.attributes.color.setX(0, 0);
      const { color } = intersects[0].object['geometry'].attributes;
      const { a, b, c } = intersects[0].face;

      const initialColor = {
        r: 0,
        g: 0.19,
        b: 0.4,
      };

      const hoverColor = {
        r: 0.1,
        g: 0.5,
        b: 1,
      };
      // Vertex 1
      color.setX(a, hoverColor.r);
      color.setY(a, hoverColor.g);
      color.setZ(a, hoverColor.b);
      // Vertex 2
      color.setX(b, hoverColor.r);
      color.setY(b, hoverColor.g);
      color.setZ(b, hoverColor.b);
      // Vertex 3
      color.setX(c, hoverColor.r);
      color.setY(c, hoverColor.g);
      color.setZ(c, hoverColor.b);
      color.needsUpdate = true;

      gsap.to(hoverColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        duration: 1,
        onUpdate: () => {
          // console.log("update");
          // Vertex 1
          color.setX(a, hoverColor.r);
          color.setY(a, hoverColor.g);
          color.setZ(a, hoverColor.b);
          // Vertex 2
          color.setX(b, hoverColor.r);
          color.setY(b, hoverColor.g);
          color.setZ(b, hoverColor.b);
          // Vertex 3
          color.setX(c, hoverColor.r);
          color.setY(c, hoverColor.g);
          color.setZ(c, hoverColor.b);
          color.needsUpdate = true;
        },
      });
    }
    // stars mesh rotation effect
    this.stars.rotation.x += 0.0007;
  }

  updatePlaneMeshGeometry() {
    const planeMesh = this.planeMesh;
    const world = this.world;
    if (!planeMesh) return;
    planeMesh.geometry.dispose();
    planeMesh.geometry = new THREE.PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    );
    this.setPosition(planeMesh);
  }

  private setPosition(mesh: any) {
    if (mesh) {
      // this.frame += 0.1;

      // const mesh = planeMesh;
      // const { array } = mesh.geometry.attributes.position;

      // const randomValues = [];
      // for (let i = 0; i < array.length; i++) {
      //   if (i % 3 === 0) {
      //     const x = array[i];
      //     const y = array[i + 1];
      //     const z = array[i + 2];
      //     array[i] = x + (Math.random() - 0.5) * 3;
      //     array[i + 1] = y + (Math.random() - 0.5) * 3;
      //     array[i + 2] = z + (Math.random() - 0.5) * 3;
      //   }
      //   randomValues.push(Math.random() * Math.PI * 2);
      // }

      // mesh.geometry.attributes.position.randomValues = randomValues;
      // mesh.geometry.attributes['position'].originalPosition =
      //   mesh.geometry.attributes['position'].array;

      const colors = [];
      for (let i = 0; i < mesh.geometry.attributes.position.count; i++) {
        colors.push(0, 0.19, 0.4);
      }
      mesh.geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
    }
  }

  cubeMesh: THREE.Mesh;
  addAnotherCubeMesh() {
    let cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
    let cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x44aa88,
    });
    let cubeMesh = this.cubeMesh;
    cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cubeMesh.position.z = this.planeMesh.position.z - 1000;
    // const colors = [];
    // for (let i = 0; i < cubeMesh.geometry.attributes.position.count; i++) {
    //   colors.push(0, 0.19, 0.4);
    // }
    // cubeMesh.geometry.setAttribute(
    //   'color',
    //   new THREE.BufferAttribute(new Float32Array(colors), 3)
    // );
    // add animation
    this.scene.add(cubeMesh);
  }
}
