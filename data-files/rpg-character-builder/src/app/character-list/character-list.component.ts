import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Character List Summary</h1>
    @if(characters.length > 0) {
      <ul>
        @for(character of characters; track character) {
          <li>
            <em>Name: </em>{{character.name}}
            <em>Gender: </em>{{character.gender}}
            <em>Class: </em>{{character.characterClass}}
            <br />
          </li>
        }
      </ul>
    } @else {
      <p>No characters added to the list yet.</p>
    }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
    }
  `
})
export class CharacterListComponent {
  @Input() characters!: Character[];
}
