/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DawnComponent } from './dawn.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('DawnComponent', () => {
  let component: DawnComponent;
  let fixture: ComponentFixture<DawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DawnComponent,HeaderComponent,FooterComponent],
      imports:[HttpClientModule,MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule,MatFormFieldModule]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(DawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
