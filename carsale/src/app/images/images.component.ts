import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DetailServiceService } from '../detailService.service';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { detailsImages } from 'src/environments/environment.development';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  displayedColumns: string[] = ['id','Model','StartingPrice','imageUrl'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  DetailService: any;
  news:any;
  reviews:any;
  offerStatus:boolean=true;
  constructor(private service:DetailServiceService,private activateRoute:ActivatedRoute) { }
  getLoginvalue:any=" ";
   ngOnInit() {
     this.getImagesList();
     this.getNewsList();
     this.getReviewList();
     this.startTimer();
     this.activateRoute.fragment.subscribe((value)=>{
          console.log(value);
          this.jumpTo(value);
     });

   }
   jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
 }
   getImagesList(){
    this.service.getImagesList().subscribe({
      next:(res:any)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      },
      error:console.log,
    })
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  products=[
      {name:'Images',right:'News',left:'Reviews'},
      {name:'News'},
      {name:'Reviews'}

     ];

     getNewsList(){
       this.service.getNewsList().subscribe((response)=>
       {
          this.news=response;
       })
     }
     getReviewList(){
      this.service.getReviewList().subscribe((response)=>
       {
          this.reviews=response;
       })
     }

     models = [
      {
        id: 1,
        name: "Cullinan",
        color: ["White", "Blue", "Black"],
        price: 680000,
        discountPrice:580000,
        items_left: 3,
        imageUrl: detailsImages.image1

      },
      {
        id: 2,
        name: "Phantom",
        color: ["White", "Blue", "Black"],
        price: 730000,
        discountPrice:500000,
        items_left: 3,
        imageUrl:detailsImages.image2,

      },
      {
        id: 3,
        name: "Wraith",
        color: ["White", "Blue", "Black", "Brown", "Red"],
        price: 820000,
        items_left: 3,
        imageUrl:detailsImages.image3 ,

      },
      {
        id: 4,
        name: "Cullinan",
        color: ["White", , "Brown", "Red"],
        price: 670000,
        discountPrice:630000,
        items_left: 3,
        imageUrl: detailsImages.image4,
      },
      {
        id: 5,
        name: "Dawn",
        color: ["White", "Blue", "Black"],
        price: 2500000,
        items_left: 3,
        imageUrl:detailsImages.image5,
      },
      {
        id: 6,
        name: "Ghost",
        color: ["White", "Blue", "Black"],
        price: 1500000,
        items_left: 8,
        imageUrl:detailsImages.image6,
        slug: "nike-phantom-vision-elite-dynamic-fit-fg"
      },
      {
        id: 7,
        name: "Wraith",
        color: ["White", "Brown", "Red", "Black"],
        price: 800000,
        discountPrice:600000,
        items_left: 3,
        imageUrl:detailsImages.image7 ,
      },
      {
        id: 8,
        name: "Ghost",
        color: ["White", "Blue", "Black"],
        price: 140000,
        discountPrice:120000,
        items_left: 7,
        imageUrl:detailsImages.image8 ,

      },
      {
        id: 9,
        name: "Phantom",
        size: [6, 7, 8, 9, 10],
        color: ["White", "Blue", "Black", "Brown", "Red"],
        price: 1370000,
        items_left: 2,
        imageUrl:detailsImages.image9,

      }

    ];

    Total=this.models;


   TotalModels=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.Total.length);
    },2000)
   })


    searchText:string='';

    onSearchTextChanged(searchValue:string){
     this.searchText=searchValue;

  }


  timer!: number;
  startTimer() {
    this.timer = 5; // Set the initial timer value

    setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.removeExpiredProduct(); // Call the method to remove expired products
      }
    }, 1000); // Decrease timer every 1 second (1000 milliseconds)
  }

  removeExpiredProduct() {
  
 this.models
  }

}

