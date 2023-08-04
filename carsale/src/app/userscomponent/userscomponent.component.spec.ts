/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserscomponentComponent } from './userscomponent.component';
import { AdminpagesidebarComponent } from '../adminpagesidebar/adminpagesidebar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';

describe('UserscomponentComponent', () => {
  let component: UserscomponentComponent;
  let fixture: ComponentFixture<UserscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscomponentComponent,AdminpagesidebarComponent],
      imports: [HttpClientModule,
        MatTableModule, 
        CdkTableModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
       MatDialogModule,MatFormFieldModule,MatPaginatorModule,MatTableModule,MatFormFieldModule],
        providers:[]
         // Include HttpClientModule here
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
