import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Login } from 'src/app/interfaces/login'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){}

  //comes from an interface
  // ngOnInit(){
  //   this.l={
  //     emailId:"ab@yahoo.com",
  //     password:"q34342"
  //   }
  // }
 

  //3. create property here, there are several ways to do this as below, then go to login.component.html
  //here loginObj is implement the interface of Login
  loginObj:Login={
    emailId: '',
    password: ''
  } 

  //7. write this loginUser function here

  // below is object type, if you don't want to give it as property type
  // loginObj={
  //   emailId:"",
  //   password:""
  // }

  // emailId:string=''
  // password:string=''

  loginUser(loginForm:NgForm){
    console.log(loginForm.value.emailId) //this is just for print the values in console
    console.log(loginForm.value.password)
    //service.CheckLogin(loginForm.value)
  }



  //validate the user, and then redirect to dashboard/index
  //   loginUser(){
  //     alert("Button is clicked")
  //     localStorage.setItem("userid", "scott")
  //     this.router.navigateByUrl("/dashboard/index") 
  //  }



  resetForm(loginForm:NgForm){
    loginForm.reset()
  }




  l:Login={
    emailId:'',
    password:''
  }

  ngOnInit(){
    this.l={
      emailId:"exmaple@gmail.com",
      password:"123abc"
    }
  }

  loadData(loginForm:NgForm){
    loginForm.setValue(this.l)
  }
}
