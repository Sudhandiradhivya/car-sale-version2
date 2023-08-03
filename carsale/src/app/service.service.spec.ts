/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceService } from './service.service';
import {HttpClientModule} from'@angular/common/http';
describe('Service: Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Include HttpClientModule here
      providers: [ServiceService]
    });
  });

  it('should ...', inject([ServiceService], (service: ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
