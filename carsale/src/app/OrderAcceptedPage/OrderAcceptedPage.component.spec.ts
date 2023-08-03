/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { OrderAcceptedPageComponent } from './OrderAcceptedPage.component';
import { ServiceService } from '../service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OrderAcceptedPageComponent', () => {
  let component: OrderAcceptedPageComponent;
  let fixture: ComponentFixture<OrderAcceptedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,ReactiveFormsModule], // Include HttpClientModule here
      declarations: [OrderAcceptedPageComponent],
      providers: [ServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAcceptedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
