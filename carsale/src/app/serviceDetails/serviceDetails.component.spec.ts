/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

import { ServiceDetailsComponent } from './serviceDetails.component';
import { AdminpagesidebarComponent } from '../adminpagesidebar/adminpagesidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
describe('ServiceDetailsComponent', () => {
  let component: ServiceDetailsComponent;
  let fixture: ComponentFixture<ServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailsComponent,AdminpagesidebarComponent],
      imports: [
        HttpClientModule,
        MatTableModule, // Include MatTableModule
        CdkTableModule,
        MatFormFieldModule,
       MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule,MatFormFieldModule
         // Include CdkTableModule
      ], // Include HttpClientModule here
      providers: []
      
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
