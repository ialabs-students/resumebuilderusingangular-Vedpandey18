
import { Component } from '@angular/core';
import { ResumeSection } from '../model/ResumeSection';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent {

  resumeData: ResumeSection;
  showResume: boolean = false;
  constructor() {
    this.resumeData = {
      name: "",
      contact: "",
      email: "",
      address: "",
      Skills: "",
      fb: "",
      insta: "",
      linkedin: "",
      Objective: "",
      Experience: "",
      Qualification: "",
      name2: "",
      p: "",
      ul: "",
      li: ""
    }


  }
}
