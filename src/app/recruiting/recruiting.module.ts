import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { RecruitingRoutingModule } from './recruiting-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCandidateComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule,
    //8. import ReactiveFormsModule, go to add-candidate.component.ts
    ReactiveFormsModule
  ]
})
export class RecruitingModule { }
