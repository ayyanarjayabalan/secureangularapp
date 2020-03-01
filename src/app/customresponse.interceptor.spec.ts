import { TestBed } from '@angular/core/testing';

import { CustomresponseInterceptor } from './customresponse.interceptor';

describe('CustomresponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomresponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomresponseInterceptor = TestBed.inject(CustomresponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
