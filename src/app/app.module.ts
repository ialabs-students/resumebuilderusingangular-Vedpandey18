import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormSectionComponent,
    ResumeSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
