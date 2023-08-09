import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  product:
    {
      id:number,
      name:string,
      color:string[],
      price:number,
      discountPrice?:number,
      items_left:number,
      imageUrl?:string
    };


}
