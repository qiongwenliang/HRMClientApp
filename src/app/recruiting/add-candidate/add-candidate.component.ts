import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})


export class AddCandidateComponent {

  constructor(private fb:FormBuilder){ }
  //using FormBuilder will allow us to create multiple Forms(FormControls) under one FormGroup

  //9. initilize a FormGroup here, and initilize properties with FormControl, go to add-candidate.component.html
  //14. validations are done here in form control, go to add-candidate.component.html
  addCandidateFormGroup: FormGroup = this.fb.group({
  "firstName": new FormControl("FirstName",[Validators.required, Validators.minLength(3)]),//firstname lastname here are initial values
  "lastName": new FormControl("LastName",[Validators.required, Validators.minLength(2)])
  });
  //!!!in fact, the part is supposed to be done in ngOnInt, and the fb is still initialized in the constructor. To set a value to the form, 
  //you must do it in ngOnInt() which is called the actual work, but the initialization of an object must be done constructor.

  candidate={
    firstName:"William",
    lastName:"Lu"
  }


  ngOnInit():void{
  //12. to match the structure of the FormGroup, this value will show automatically in the input text
    // this.addCandidateFormGroup.patchValue(this.candidate)
  }

  
  //11. create this function
  addCandidate(){
    console.log(this.addCandidateFormGroup.value);
  }


  loadData(){
    //13. when you click on load data button, it will show in the input text again. next is validation
    this.addCandidateFormGroup.patchValue(this.candidate)
  }


  submitData(){
    console.log(this.addCandidateFormGroup.value);
  }
}
