/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminpagesidebarComponent } from './adminpagesidebar.component';
import { HttpClientModule } from '@angular/common/http';

describe('AdminpagesidebarComponent', () => {
  let component: AdminpagesidebarComponent;
  let fixture: ComponentFixture<AdminpagesidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      declarations: [ AdminpagesidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpagesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
