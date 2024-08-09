import { Component } from '@angular/core';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent {
  year = new Date().getFullYear();
  hide = false;
  headersElements: {
    id: number;
    text: string;
    link: string;
  }[] = [
    { id: 1, text: 'Summary', link: 'portfolio-summary' },
    { id: 2, text: 'Technical skills', link: 'portfolio-technical' },
    {
      id: 3,
      text: 'Professional Experience',
      link: 'portfolio-prof-experience',
    },
    { id: 4, text: 'Education', link: 'portfolio-education' },
    { id: 5, text: 'Certification', link: 'portfolio-certification' },
    { id: 6, text: 'Personal Info', link: 'portfolio-personal' },
    { id: 7, text: 'Thanks', link: 'portfolio-thanks' },
  ];
  constructor(private cameraService: CameraService){ }

  goHome(){
    this.hide = true;
    this.cameraService.resetCameraPosition();
  }
}
