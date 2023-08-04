import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClientModule} from'@angular/common/http';
import { aboutImages, environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:Router) { }
  aboutImg:any=aboutImages;

  ngOnInit() {
  }
carDetails=[
  
  {
    th1:2005,
    th2:796
  },
  {
    th1:2006,
    th2:805
  },
  {
    th1:2007,
    th2:1010
  },
  {
      th1:2008,
      th2:1212
  },
  {
    th1:2008,
    th2:1212
},
{
  th1:2009,
  th2:1002
},
{
  th1:2010,
  th2:2711
},
{
  th1:2011,
  th2:3538
},
{
  th1:2012,
  th2:3575
},
{
  th1:2013,
  th2:3630
},
{
  th1:2014,
  th2:4063
},
{
  th1:2015,
  th2:3785
},
{
  th1:2016,
  th2:4011
},
{
  th1:2017,
  th2:3362
},
{
  th1:2018,
  th2:4017
},
{
  th1:2019,
  th2:5152
},
{
  th1:2020,
  th2:3756
},
{
  th1:2021,
  th2:5586
},
{
  th1:2022,
  th2:6021
}
]


  show=false;
  openpop(){
    this.show=true;
  }
  closepopup(){
    this.show=false;
  }
  overlay(e:any){
    if(e.target.classList.contains("overlay")){
      this.show=false;
    }
  }
  access(){
    location.pathname = ('/Cart');
  }
  review(){
    location.pathname = ('/images');
  }
  news(){
    location.pathname = ('/images');
  }
  image(){
    location.pathname = ('/images');
  }

  
  

}
