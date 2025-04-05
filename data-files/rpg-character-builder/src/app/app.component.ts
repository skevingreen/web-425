import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="/assets/rpg_character_builder.png" alt="website banner for RPG Character Builder" class="banner-img">
      </header>

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

    `
  ]
})
export class AppComponent {
  title = 'RPG Character Builder';
}
