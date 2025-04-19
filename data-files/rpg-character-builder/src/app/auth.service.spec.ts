import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: CookieService, useValue: spy }]
    });
    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set cookie and authState to true on successful signin', () => {
    const result = service.signin('misty.monk@prodigy.net', 'Thisisth3way');
    expect(result).toBeTrue();
    expect(service.getAuthState().subscribe(state => expect(state).toBeTrue()));
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  it('should not set cookie and authState to true on unsuccessful signin', () => {
    const result = service.signin('dude@somewhere.com', 'imadethisUp23');
    expect(result).toBeFalse();
    expect(service.getAuthState().subscribe(state => expect(state).toBeFalse()));
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
