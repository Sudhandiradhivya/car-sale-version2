/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { OrderDetailsComponent } from './OrderDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdminpagesidebarComponent } from '../adminpagesidebar/adminpagesidebar.component';
describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  const mockDialog = {
    open: jasmine.createSpy('open')
  };

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent,AdminpagesidebarComponent ],
      imports: [HttpClientModule,MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule,MatFormFieldModule],
      providers: [
        { provide: MatDialog, useValue: mockDialog } // Provide the mock MatDialog
      ]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
