/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ExampleComponent } from './example.component';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../Model.service';
import { DetailServiceService } from '../detailService.service';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent,SearchComponent],
      imports: [HttpClientTestingModule,FormsModule],
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
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
