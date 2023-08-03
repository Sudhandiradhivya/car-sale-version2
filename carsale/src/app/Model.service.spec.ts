/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModelService } from './Model.service';
import {HttpClientModule} from'@angular/common/http';
describe('Service: Model', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ModelService]
    });
  });

  it('should ...', inject([ModelService], (service: ModelService) => {
    expect(service).toBeTruthy();
  }));
});
