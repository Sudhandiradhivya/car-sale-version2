/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailServiceService } from './detailService.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: DetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailServiceService],
      imports: [HttpClientModule], // Include HttpClientModule here
     
    });
  });

  it('should ...', inject([DetailServiceService], (service: DetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
