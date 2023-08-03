/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModelsregisterComponent } from './Modelsregister.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';

describe('ModelsregisterComponent', () => {
  let component: ModelsregisterComponent;
  let fixture: ComponentFixture<ModelsregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ReactiveFormsModule], // Include HttpClientModule here
      declarations: [ModelsregisterComponent],
     
      providers: [ServiceService]
    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
