/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import { ServiceloginComponent } from './servicelogin.component';
import { ServiceService } from '../service.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ServiceloginComponent', () => {
  let component: ServiceloginComponent;
  let fixture: ComponentFixture<ServiceloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ReactiveFormsModule], // Include HttpClientModule here
      declarations: [ServiceloginComponent,HeaderComponent,FooterComponent],
      providers: [ServiceService]
      
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
