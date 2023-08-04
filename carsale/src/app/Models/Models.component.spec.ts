/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // If you're using forms
import { ModelsComponent } from './Models.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelService } from '../Model.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('ModelsComponent', () => {
  let component: ModelsComponent;
  let fixture: ComponentFixture<ModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[ModelsComponent,HeaderComponent,FooterComponent],
      imports: [HttpClientModule,CommonModule,
        FormsModule,RouterModule], // Include HttpClientModule here
      providers: [
        ModelService,
        
        {
          provide: ActivatedRoute,
          useValue: {
            // mock properties or methods here
          }
        }
      ] 

    })
    .compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
