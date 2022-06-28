import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';
@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {
  
  formData: ResumeFormData;
  showResume: boolean=false;

  constructor() { 
  this.formData={
    name:"",
    contact:"",
    email:"",
    address: "",
    Skills: "",
    fb:"",
    insta:"",
    linkedin: "",
    Objective:"",
    Experience:"",
    Qualification:""
  }}

  ngOnInit(): void {
  }
  generateCV(){
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }

}
