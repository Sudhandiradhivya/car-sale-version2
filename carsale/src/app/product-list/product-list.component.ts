import { Component } from '@angular/core';
import { detailsImages } from 'src/environments/environment.development';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  models = [
    {
      id: 1,
      name: "Cullinan",
      color: ["White", "Blue", "Black"],
      price: 680000,
      discountPrice:580000,
      items_left: 3,
      imageUrl: detailsImages?.image1


    },
    {
      id: 2,
      name: "Phantom",
      color: ["White", "Blue", "Black"],
      price: 730000,
      discountPrice:500000,
      items_left: 3,
      imageUrl:detailsImages?.image2,

    },
    {
      id: 3,
      name: "Wraith",
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 820000,
      items_left: 3,
      imageUrl:detailsImages?.image3 ,

    },
    {
      id: 4,
      name: "Cullinan",
      color: ["White", , "Brown", "Red"],
      price: 670000,
      discountPrice:630000,
      items_left: 3,
      imageUrl: detailsImages?.image4,
    },
    {
      id: 5,
      name: "Dawn",
      color: ["White", "Blue", "Black"],
      price: 2500000,
      items_left: 3,
      imageUrl:detailsImages?.image5,
    },
    {
      id: 6,
      name: "Ghost",
      color: ["White", "Blue", "Black"],
      price: 1500000,
      items_left: 8,
      imageUrl:detailsImages?.image6,
      slug: "nike-phantom-vision-elite-dynamic-fit-fg"
    },
    {
      id: 7,
      name: "Wraith",
      color: ["White", "Brown", "Red", "Black"],
      price: 800000,
      discountPrice:600000,
      items_left: 3,
      imageUrl:detailsImages?.image7 ,
    },
    {
      id: 8,
      name: "Ghost",
      color: ["White", "Blue", "Black"],
      price: 140000,
      discountPrice:120000,
      items_left: 7,
      imageUrl:detailsImages?.image8 ,

    },
    {
      id: 9,
      name: "Phantom",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 1370000,
      items_left: 2,
      imageUrl:detailsImages?.image9,

    }

  ];

}
