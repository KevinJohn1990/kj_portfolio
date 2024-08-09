import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private cameraSubs: Subject<boolean>;
  constructor() { }

  public setCameraSubs(s: Subject<boolean>){
    this.cameraSubs =s;
  }
  public getCameraSubs(){
    return this.cameraSubs;
  }
  // c : THREE.PerspectiveCamera
  public setAndGetCamera(fov?: number, aspect?: number, near?: number, far?: number){
    var c=  new THREE.PerspectiveCamera(fov, aspect, near, far);
    return c;
  } 
  
  public resetCameraPosition(){
    if (!this.cameraSubs) return;
    this.cameraSubs.next(true);
  }
}
