import { Component, OnInit } from '@angular/core';
import { ModelService } from '../Model.service';
import { ServiceService } from '../service.service';
import { modelsImages } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Models',
  templateUrl: './Models.component.html',
  styleUrls: ['./Models.component.css']
})
export class ModelsComponent implements OnInit {


  getProduct:any;
  constructor(private service:ModelService,private carModel:ServiceService,private route: ActivatedRoute) {
    this.service.getModel().subscribe(data=>{
      this.getProduct=data;
    });
  }

name1:string='R R Ghost';
name2:string='R RCullinan';
name3:string='R R Wraith';
name4:string='R R Phantom';
name5:string='R R Dawn';


  ngOnInit() {
    
  }
modelsImg:any=modelsImages;

models=[
  {name:"Royce Cullinan",price:"6.95 Cr*"},
  {name:"Rolls-Royce Phantom",price:"8.99 - 10.48 Cr*"},
  {name:"Rolls-Royce Ghost",price:" 6.95 - 7.95 Cr*"},
  {name:"Rolls Royce Wraith",price:" 6.22 - 7.21 Cr*"},
  {name:"Rolls Royce Dawn",price:" 7.06 - 7.64 Cr*"}
];

specification=[
  {name:"Popular Models",value:"Cullinan, Phantom, Ghost, Rolls Royce Wraith, Rolls Royce Dawn"},
  {name:"Service Centers",value:"2"},
  {name:"Showrooms",value:"2"},
  {name:"Fuel Type",value:"Petrol"},
  {name:"Affordable Model",value:"Rolls Royce Wraith(Rs. 6.22 Cr)"},
  {name:"Most Expensive",value:"Rolls-Royce Phantom(Rs. 8.99 Cr)"}
]


}
