import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerService } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidateService {

constructor(private client:HttpClient) { }
 addRegister(data:any){
  return this.client.post(registerService.register,data);
 }
}
