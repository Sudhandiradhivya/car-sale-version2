import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { environment, serviceServiceImages} from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl=serviceServiceImages.Url;
  constructor(private http:HttpClient) { }
postServiceDetails(body:any){
  return this.http.post(serviceServiceImages.ServiceDetails,body)
}
postOrderDetails(body:any){
  return this.http.post(environment.name,body)
}
postLoginDetails(body:any){
  return this.http.post(serviceServiceImages.Register,body)
}

getCarModels(){
  return this.http.get(this.apiUrl);
}
getGhostModels(){
   return this.http.get(serviceServiceImages.GhostModels);
}
getCullinanModels(){
  return this.http.get(serviceServiceImages.CullinanModels);
}
getPhantomModels(){
  return this.http.get(serviceServiceImages.PhantomModels);
}
getWraithModels(){
  return this.http.get(serviceServiceImages.WraithModels);
}
getDawnModels(){
  return this.http.get(serviceServiceImages.DawnModels);
}
content:any='';
model:any='';
}
