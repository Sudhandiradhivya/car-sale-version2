/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularRegisterComponent } from './Angular-register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterValidateService } from '../RegisterValidate.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';

describe('AngularRegisterComponent', () => {
  let component: AngularRegisterComponent;
  let fixture: ComponentFixture<AngularRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule], // Include HttpClientModule here
      declarations: [AngularRegisterComponent,HeaderComponent,FooterComponent],
      providers:
       [
        RegisterValidateService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ /* mock your route params here */ }),
            },
          },
        },
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
