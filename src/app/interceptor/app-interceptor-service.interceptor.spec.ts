import { TestBed } from '@angular/core/testing';

import { AppInterceptorServiceInterceptor } from './app-interceptor-service.interceptor';

describe('AppInterceptorServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppInterceptorServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppInterceptorServiceInterceptor = TestBed.inject(AppInterceptorServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
