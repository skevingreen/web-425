import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="/assets/rpg_character_builder.png" alt="website banner for RPG Character Builder" class="banner-img">
      </header>

      <div class="sign-in-container">
        @if(email) {
          <p>Welcome, {{ email }}!</p>
          <button (click)="signout()">Sign Out</button>
        } @else {
          <a routerLink="/signin" class="sign-in-link">Sign In</a>
        }
      </div>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/signin">Signin</a></li>
            <li><a routerLink="/create-character">Character Creator</a></li>
            <li><a routerLink="/create-guild">Guild Creator</a></li>
            <li><a routerLink="/character-faction">Character Factions</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a routerLink="/players">Players</a> |
          <a routerLink="/signin">Signin</a> |
          <a routerLink="/create-character">Character Creator</a> |
          <a routerLink="/create-guild">Guild Creator</a> |
          <a routerLink="/character-faction">Character Factions</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
  `, styles: [
    `
      .sign-in-container {
        text-align: right;
        padding-right: 20px;
        margin-top: 10px;
      }

      .sign-in-link {
        color: #000000;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
      }

      .sign-in-link:hover {
        text-decoration: underline;
      }
    `
  ]
})

export class AppComponent {
  title = 'RPG Character Builder';

  email?: string;

  constructor(private authService: AuthService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout() {
    this.authService.signout();
  }
}
