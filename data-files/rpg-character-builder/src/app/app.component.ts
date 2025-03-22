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
            <li><a href="#">Classes</a></li>
            <li><a href="#">Weapons</a></li>
            <li><a href="#">Armor</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a href="#">Classes</a> |
          <a href="#">Weapons</a> |
          <a href="#">Armor</a> |
          <a href="#">Feedback</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
  `, styles: [
    `

    `
  ]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
