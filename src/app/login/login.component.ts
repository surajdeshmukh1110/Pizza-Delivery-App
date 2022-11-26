import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailError:string="";
  passError:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  
 

// form.addEventListener('submit',e=>{
   

//       console.log(usernameEmail.value);
//     e.preventDefault();
//     validateInputs();
// });

//  setError(elment,message){

//     const inputControl=elment.parentElement;
//     const errorDisplay=inputControl.querySelector('.error');

//     errorDisplay.innerText=message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');

// }

//  setSuccess (elment){
//     const inputControl=elment.parentElement;
//     const errorDisplay=inputControl.querySelector('.error');
//     errorDisplay.innerText='';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('.error')
// }

 isValidEmail (usernameEmail:String){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log(re.test(String(usernameEmail).toLocaleLowerCase()));
    return re.test(String(usernameEmail).toLocaleLowerCase());
}

validateInputs(usernameEmail:string,password:string){

    
    const emeilValue=usernameEmail.trim();
    console.log(emeilValue);

    const passwordvalue=password.trim();

   


    if(emeilValue==''){

      this.emailError="User Name is Required";
        

    }else if(!this.isValidEmail(emeilValue)) 
    {

      this.emailError="Provide a Valid Email Address";

    }
   
    else if(passwordvalue===''){

        this.passError="Password is Required";
    }else if(passwordvalue.length<8)
    {
        this.passError="Password At Least 8 Characters";
    }else{
      
       this.passError="";
       this.emailError="";
       this.router.navigate(['home']);
    }
    
}



}
