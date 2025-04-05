export interface Character {  // Define a Character's attributes 
  name: string,
  gender: string,
  class: string,
  faction: string,
  startingLocation: string,
  funFact: string
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Players</h1>
      <p>
        Get your adventure started quickly by choosing a character from our
        pre-configured list.
      </p>
      <ul class="character-container">
        @for (character of characters; track character) {
          <li class="player">
            <div class="card">
              <h3>{{ character.name }}</h3>
              <p><em>Gender:</em> {{ character.gender }}</p>
              <p><em>Class:</em> {{ character.class }}</p>
              <p><em>Faction:</em> {{ character.faction }}</p>
              <p><em>Starting Location:</em> {{ character.startingLocation }}</p>
              <p><em>Fun Fact:</em> {{ character.funFact }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .character-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }

      .player {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .card {
        padding: 20px;
        background-color: white;
      }
    `
  ]
})
export class PlayersComponent {
  characters: Character[];

  constructor() {
    this.characters = [ // populate the characters array
      {
        "name": "Bjorn",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Phantom Riders",
        "startingLocation": "Thornhill",
        "funFact": "Bjorn has a birthmark that looks like a lion."
      },
      {
        "name": "Svetlana",
        "gender": "Female",
        "class": "Mage",
        "faction": "Phantom Riders",
        "startingLocation": "Thornhill",
        "funFact": "Svetlana can see in the dark."
      },
      {
        "name": "Tishan",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Phantom Riders",
        "startingLocation": "Thornhill",
        "funFact": "Tishan ran off with a traveling circus when they were twelve."
      },
      {
        "name": "Gilda",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Oath Bearers",
        "startingLocation": "Black Island",
        "funFact": "Gilda once knocked out a bear with her hands."
      },
      {
        "name": "Morgan",
        "gender": "Male",
        "class": "Mage",
        "faction": "Oath Bearers",
        "startingLocation": "Black Island",
        "funFact": "Morgan has one blue eye and one green eye."
      },
      {
        "name": "Ostan",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Oath Bearers",
        "startingLocation": "Black Island",
        "funFact": "Ostan can throw their voice"
      },
      {
        "name": "Adrian",
        "gender": "Other",
        "class": "Warrior",
        "faction": "Keepers of the Flame",
        "startingLocation": "Fire Mountain",
        "funFact": "Adrian is afraid of snakes."
      },
      {
        "name": "Mordeth",
        "gender": "Male",
        "class": "Mage",
        "faction": "Keepers of the Flame",
        "startingLocation": "Fire Mountain",
        "funFact": "Mordeth has mastered the art of invisibility."
      },
      {
        "name": "Talil",
        "gender": "Female",
        "class": "Rogue",
        "faction": "Keepers of the Flame",
        "startingLocation": "Fire Mountain",
        "funFact": "Talil plans to publish a book about her journeys once she has collected enough stories."
      },
      {
        "name": "Avros",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Keepers of the Flame",
        "startingLocation": "Fire Mountain",
        "funFact": "Avros is well regarded as a singer."
      }
    ];
  }
}
