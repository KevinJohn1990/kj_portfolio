import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-certification',
  templateUrl: './portfolio-certification.component.html',
  styleUrls: ['./portfolio-certification.component.scss'],
})
export class PortfolioCertificationComponent {
  imageObject: Array<object> = [
    {
      image: 'assets/img/slider/Angular_Mosh_Cert.jpg',
      thumbImage: 'assets/img/slider/Angular_Mosh_Cert.jpg',
      alt: 'Angular certificate',
      title: 'Angular',
    },
    {
      image: 'assets/img/slider/asp.netMvc Cert.jpg',
      thumbImage: 'assets/img/slider/asp.netMvc Cert.jpg',
      alt: 'Asp MVC certificate',
      title: 'Asp.net MVC',
    },
    {
      image: 'assets/img/slider/linux_cmd_cert.jpg',
      thumbImage: 'assets/img/slider/linux_cmd_cert.jpg',
      alt: 'Linux cmd terminal certificate',
      title: 'Linux commands',
    },
    {
      image: 'assets/img/slider/d3js_firebase_cert.jpg',
      thumbImage: 'assets/img/slider/d3js_firebase_cert.jpg',
      alt: 'd3js certificate',
      title: 'd3js',
    },
    {
      image: 'assets/img/slider/js_cert.jpg',
      thumbImage: 'assets/img/slider/js_cert.jpg',
      alt: 'Javascript certificate',
      title: 'Modern javascript',
    },
    {
      image: 'assets/img/slider/Ionic_Cert.jpg',
      thumbImage: 'assets/img/slider/Ionic_Cert.jpg',
      alt: 'Ionic certificate',
      title: 'Ionic',
    },
    {
      image: 'assets/img/slider/NodeJs_Cert.jpg',
      thumbImage: 'assets/img/slider/NodeJs_Cert.jpg',
      alt: 'Nodejs certificate',
      title: 'Nodejs',
    },
  ];
}
