import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelService } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

constructor(private http:HttpClient) { }
getModel(){
         return this.http.get(modelService.model);
}

}
