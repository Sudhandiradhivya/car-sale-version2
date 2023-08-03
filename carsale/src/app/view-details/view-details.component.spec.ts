/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ViewDetailsComponent } from './view-details.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('ViewDetailsComponent', () => {
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;
  const mockDialog = {
    open: jasmine.createSpy('open')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsComponent,HeaderComponent,FooterComponent],
      imports: [HttpClientModule,MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule],
      providers: [
        { provide: MatDialog, useValue: mockDialog } // Provide the mock MatDialog
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
