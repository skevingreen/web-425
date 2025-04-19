export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(private cookieService: CookieService, private router: Router) {
    this.users = [
      { empId: 1000, email: 'misty.monk@prodigy.net', password: 'Thisisth3way'},
      { empId: 1001, email: 'redwarrior@prodigy.net', password: 'A11outofgum'},
      { empId: 1002, email: 'thewizardh@prodigy.net', password: 'B0wb3f0r3m3'},
      { empId: 1003, email: 'angusthearcane@prodigy.net', password: 'Imt00old4this'},
      { empId: 1004, email: 'c.destroyer@prodigy.net', password: 'Ih8snak35man'}
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
