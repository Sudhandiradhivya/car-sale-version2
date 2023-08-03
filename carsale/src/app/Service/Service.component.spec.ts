/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiceComponent } from './Service.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceComponent,HeaderComponent,FooterComponent],
      imports:[RouterModule],
      providers: [
        // Provide ActivatedRoute
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
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
