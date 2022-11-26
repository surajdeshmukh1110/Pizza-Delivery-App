import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Signup } from '../signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 signup:Signup=new Signup();

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
 
  
  nameUserError:string="";
  mobileError:string="";
  addressError:string="";
  emailError:string="";
  passwordError:string="";
  password2Error:string="";
  //signUpForm:NgForm=;

  
   isValidEmail(email:string){
  
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log(re.test(String(email).toLocaleLowerCase()));
    return re.test(String(email).toLocaleLowerCase());
  }
  
  validateInputs(form:NgForm){
  
    console.log(form);
    const namevalue=form.value.nameUser.trim();
    const mobileValue=form.value.mobile+'';
    const addressvalue=form.value.address.trim();
    const emeilValue=form.value.email.trim();
    const passwordvalue=form.value.password.trim();
    const password2value=form.value.password2.trim();
  
    if(namevalue===''){
        
      this.nameUserError='User Name is mandatery';
      
  }
  else{
      this.nameUserError='';
  }
  
  
  
  
  if(mobileValue===''){
  
    this.mobileError='Password is Required';
      
  }else if(mobileValue.length!=10)
  {
    this.mobileError=' Number Must be 10 Digits';
      
  }else{
      this.mobileError='';
  }
  
  
  
  if(addressvalue===''){

    this.addressError='User Name is mandatery';
  
  }
  else
  {

    this.addressError='';
      
  }
  
  
  
    if(emeilValue==''){

      this.emailError='User Name is Required';
  
       
  
    }else if(!this.isValidEmail(emeilValue)) 
    {
      this.emailError='Provide a Valid Email Address '
  
        
    }
    else
    {
        this.emailError='';
        
    }
  
  
  
    if(passwordvalue===''){
  
      this.passwordError='Password is Required';
        
    }else if(passwordvalue.length<8)
    {
      this.passwordError='Password At Least 8 Characters';
        
    }else{
      this.passwordError='';
        
    }
  
  
    if(password2value===''){
  
      this.password2Error='Please Conferm Your Password ';
      
      
  
  }else if(password2value!=passwordvalue)
  {
    this.password2Error='Password NOT Match With Previus Password';
    
      
  }else
  {
     this.password2Error='';
      
  }

  if(this.password2Error=='' && this.addressError=='' && this.emailError=='' && this.mobileError=='' && this.passwordError=='' && this.nameUserError==''){

    this.userRegister(form.value);
  }
    
  }
  userRegister(form:any){

    this.signup.name=form.nameUser;
    this.signup.address=form.address;
    this.signup.mobileNumber=form.mobile+'';
    this.signup.eMail=form.email;
    this.signup.password=form.password;
    this.signup.confermPassword=form.password2;
    console.log(this.signup);
    this.registerService.registerUser(this.signup).subscribe(data=>
      {
        alert("Successfully User is Registered ");
        this.router.navigate(['']);
      },error=>alert("Sorry User Not Registered"));
  }
  
}

  

