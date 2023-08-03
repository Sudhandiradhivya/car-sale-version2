/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterValidateService } from './RegisterValidate.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: RegisterValidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Include HttpClientModule here
      providers: [RegisterValidateService]
    });
  });

  it('should ...', inject([RegisterValidateService], (service: RegisterValidateService) => {
    expect(service).toBeTruthy();
  }));
});
