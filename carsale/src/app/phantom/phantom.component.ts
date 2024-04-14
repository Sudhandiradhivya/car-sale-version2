import { Component, OnInit } from '@angular/core';
import { ModelsregisterComponent } from '../Modelsregister/Modelsregister.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { phantomImages } from 'src/environments/environment.development';

@Component({
  selector: 'app-phantom',
  templateUrl: './phantom.component.html',
  styleUrls: ['./phantom.component.css']
})
export class PhantomComponent implements OnInit {
carModel:any;
  constructor(private dialog:MatDialog,private service:ServiceService) {
    this.service.getPhantomModels().subscribe((data)=>{
      this.carModel=data;
   });
   }

  ngOnInit() {
  }
phantomImg=phantomImages;


  openDialog(details:any) {
    console.log(details);
    this.service.content=details.name;
    this.service.model=details.discountPrice?details.discountPrice:details.price;
    this.dialog.open(ModelsregisterComponent, {
      width:'35%',
      height:'65%'
    });
this.cullinan();
  }
  cullinan(){
    this.service.content='Phantom';
  }

}
