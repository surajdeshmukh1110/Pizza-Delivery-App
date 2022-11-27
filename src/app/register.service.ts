import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8080/signup";

  constructor(private httpClient:HttpClient) { }

  registerUser(signup:Signup):Observable<object>{

    console.log(signup);
    return this.httpClient.post(`${this.baseUrl}`,signup);
  }
}
