import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="characterFactions">
      <h1>Faction List Summary</h1>
      @if(factions !== null && factions.length > 0) {
        <ul>
          @for(faction of factions; track faction) {
            <li>
              <em>Faction Name: </em>{{ faction.name }}
              <br />
              <em>Description: </em>{{ faction.description }}
            </li>
            <br />
          }
        </ul>
      } @else {
        <p>{{ noFactionsMessage }}</p>
      }
    </div>
  `,
  styles: ``
})
export class CharacterFactionComponent {
  factions: any = null;
  noFactionsMessage: string = '';

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
      next: (res) => {
        this.factions = res;
      },
      error: (err) => {
        console.error('Error fetching factions', err);

        if(err.error === 'Factions not found') {
          this.noFactionsMessage = 'No factions today.  Check back tomorrow!';
        } else {
          this.noFactionsMessage = 'Error fetching factions.  Please try again later.';
        }
      }
    });
  }
}
