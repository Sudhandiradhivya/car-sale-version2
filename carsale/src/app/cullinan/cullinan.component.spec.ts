/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CullinanComponent } from './cullinan.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('CullinanComponent', () => {
  let component: CullinanComponent;
  let fixture: ComponentFixture<CullinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CullinanComponent,HeaderComponent,FooterComponent ],
      imports:[HttpClientModule,MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule,MatFormFieldModule]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(CullinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
