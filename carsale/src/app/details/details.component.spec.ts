/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailsComponent } from './details.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ImagesComponent } from '../images/images.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailServiceService } from '../detailService.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product-list/product/product.component';
import { ButtonfilterComponent } from '../buttonfilter/buttonfilter.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent,HeaderComponent,FooterComponent,ImagesComponent,ProductListComponent,ProductComponent,ButtonfilterComponent],
      imports:[HttpClientModule,FormsModule],
      providers:[DetailServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ /* mock your route params here */ }),
            },
          },
        },]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
