/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginnewComponent } from './Loginnew.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('LoginnewComponent', () => {
  let component: LoginnewComponent;
  let fixture: ComponentFixture<LoginnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,MatDialogModule,ReactiveFormsModule,RouterModule],
      declarations: [LoginnewComponent,HeaderComponent,FooterComponent ],
      providers: [
        // Provide ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {
            /* Mock the necessary properties or methods of ActivatedRoute */
          },
        },]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
