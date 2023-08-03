/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImagesComponent } from './images.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailServiceService } from '../detailService.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ImagesComponent,HeaderComponent,FooterComponent],
      imports: [HttpClientModule,RouterModule], // Include HttpClientModule here
      providers: [
        // Provide ActivatedRoute
        DetailServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            /* Mock the necessary properties or methods of ActivatedRoute */
          },
        },]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
