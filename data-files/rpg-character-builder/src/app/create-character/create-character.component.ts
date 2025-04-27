// interface to define Character properties
export interface Character {
  id: number;
  name: string;
  gender: string;
  characterClass: string;
}

// interface to define Gender properties
export interface Gender {
  id: number;
  description: string;
}

// interface to define Class properties
export interface Class {
  id: number;
  description: string;
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent],
  template: `
    <div class="character-form-container">
      <form class="character-form" #characterCreationForm="ngForm" (ngSubmit)="addToCharacterList();">
        <h1>Complete the form below to create a new character.</h1>
        <fieldset>
          <legend>My Character</legend>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="name-input" [(ngModel)]="name" ngModel>

          <label for="gender">Gender</label>
          <select name="gender" id="gender" [(ngModel)]="selectedGenderId" ngModel>
            @for(gender of genders; track gender) {
              <option value="{{gender.id}}">{{gender.description}}</option>
            }
          </select>

          <label for="characterClass">Character Class</label>
          <select name="characterClass" id="characterClass" [(ngModel)]="selectedClassId" ngModel>
            @for(aClass of classes; track aClass) {
              <option value="{{aClass.id}}">{{aClass.description}}</option>
            }
          </select>

          <input type="submit" value="Submit" />
        </fieldset>
      </form>

      <div class="character-list-summary">
        <app-character-list [characters]="characters"></app-character-list>
      </div>
    </div>
  `,
  styles: [
    `
      .character-form-container {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .character-form {
        flex: 1;
        margin-right: 20px;
      }

      .character-list-summary {
        flex: 1;
      }

      fieldset {
        margin-bottom: 20px;
      }

      label, select, .name-input {
        display: block;
        margin-bottom: 5px;
      }

      .name-input, select, input[type="submit"] {
        padding: 8px;
        box-sizing: border-box;
      }

      select {
        width: 100%
      }

      .qty-input {
        width: 20%;
      }

      input[type="submit"] {
        float: right;
      }

      .customization-option {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }

      /*
      .character-list-summary li {
        margin-bottom: 10px;
        padding: 5px;
      }
      */
    `
  ]
})
export class CreateCharacterComponent {
  genders: Gender[];
  classes: Class[];
  selectedGenderId: number;
  selectedClassId: number;
  characters: Character[];
  name: string;

  @Output() charactersUpdate = new EventEmitter<Character>();

  constructor() {
    this.genders = [                  // populate a list of genders for the form selector
      {id:1, description:"Male"},
      {id:2, description:"Female"},
      {id:3, description:"Other"}
    ];

    this.classes = [                  // populate a list of classes for the form selector
      {id:1, description:"Warrior"},
      {id:2, description:"Mage"},
      {id:3, description:"Rogue"}
    ]

    this.selectedGenderId = this.genders[0].id; // initialize the selected gender id
    this.selectedClassId = this.classes[0].id;  // initialize the selected class id
    this.characters = [];                       // initialize the characters array to be empty
    this.name = "";                             // initialize the character name to an empty string
  }

  // adds a generated character to the characters array
  addToCharacterList() {
    const selectedGenderNum = Number(this.selectedGenderId);                              // get the index of the selected gender
    const selectedGender = this.genders.find(gender => gender.id === selectedGenderNum);  // get the selected gender object

    const selectedClassNum = Number(this.selectedClassId);                                // get the index of the selected class
    const selectedClass = this.classes.find(aClass => aClass.id === selectedClassNum)     // get the selected class object

    if (selectedGender !== undefined && selectedClass != undefined) {   // check that both gender and class were defined
      const characterToAdd = {                                          // create the character
        id:  Math.floor(Math.random() * 1000) + 1,                      // set the character id to a random number between 1 and 1000
        name: this.name,                                                // set the name to the text entered in the form
        gender: selectedGender.description,                             // set the gender based on form selection
        characterClass: selectedClass.description                       // set the class based on form selection
      }

      this.characters.push(characterToAdd);                             // put the created character on the characters array
      console.log('Character List after adding: ', this.characters);    // log the characters list after adding the new character

      this.resetForm();   // reset the form to defaults so more characters can be created
    } else {
      console.error('Either gender or class was undefined.'); // log gender/class related error
    }
  }

  // resets the form to default values
  resetForm() {
    this.selectedGenderId = this.genders[0].id;   // reset gender form selection to default
    this.selectedClassId = this.classes[0].id;    // reset class form selection to default
    this.name = "";                               // reset name form entry to default
  }
}
