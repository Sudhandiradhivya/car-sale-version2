import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { serviceImages } from 'src/environments/environment.development';

@Component({
  selector: 'app-Service',
  templateUrl: './Service.component.html',
  styleUrls: ['./Service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
serviceimages:any=serviceImages;
  
}
