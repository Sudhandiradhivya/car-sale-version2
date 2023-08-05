import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { detailsImages } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
addUser: any;

constructor(private http:HttpClient) { }
getLoginDetails(){
  return this.http.get(detailsImages.loginDetails);
}
getServiceDetails(){
  return this.http.get(detailsImages.serviceDetails);
}
getOrderDetails(){
  return this.http.get(detailsImages.modelsRegister);
}
getUsersList():Observable<any>{
    return this.http.get(detailsImages.user);
}
deleteUser(id:number):Observable<any>{
   return this.http.delete(`http://localhost:3000/Register/${id}`);
}
getOrderList():Observable<any>{
  return this.http.get(detailsImages.modelsRegister);
}
deleteOrder(id:number):Observable<any>{
  return this.http.delete(`detailsImages.modelsRegister/${id}`);
}
getServiceList():Observable<any>{
  return this.http.get(detailsImages.serviceDetails);
}
deleteService(id:number):Observable<any>{
  return this.http.delete(`http://localhost:3000/serviceDetails/${id}`);
}
getImagesList():Observable<any>{
 return this.http.get(detailsImages.images);
}
getNewsList():Observable<any>{
       return this.http.get(detailsImages.news);
}
getReviewList():Observable<any>{
 return this.http.get(detailsImages.reviews);
}
getExampleImage():Observable<any>{
  return this.http.get(detailsImages.exampleImages);
}
billGenerate:any;
value:any;
carmodels:any;
}
