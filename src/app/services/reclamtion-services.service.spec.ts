import { TestBed } from '@angular/core/testing';

import { ReclamtionServicesService } from './reclamtion-services.service';

describe('ReclamtionServicesService', () => {
  let service: ReclamtionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamtionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
