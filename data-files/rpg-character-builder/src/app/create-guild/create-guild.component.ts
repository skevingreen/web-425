// https://akhromieiev.com/how-to-determine-check-uncheck-checkbox-event-in-angular/

// interface to define Guild properties
export interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="newGuild-form-container">
      <form [formGroup]="newGuildForm" (ngSubmit)="addToGuildList();" class="guild-form">
        <h1>Complete the form below to form a new guild.</h1>

        <fieldset>
          <legend>Guild Options</legend>

          <label for="guildName">Name</label>
          <input formControlName="guildName" type="text" id="guildName" name="guildName">
          @if(newGuildForm.controls['guildName'].touched && newGuildForm.controls['guildName'].hasError('required')) {
            <small class="error">Guild name is required.</small>
          }

          <label for="description">Description</label>
          <textarea rows="5" formControlName="description"></textarea>
          @if(newGuildForm.controls['description'].touched && newGuildForm.controls['description'].hasError('required')) {
            <small class="error">Description is required.</small>
          }

          <label for="type">Type</label>
          <select formControlName="type" id="type">
            @for(option of guildTypes; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>
          @if(newGuildForm.controls['type'].touched && newGuildForm.controls['type'].hasError('required')) {
            <small class="error">Type is required.</small>
          }

          <br /><br />
          <input type="checkbox" formControlName="acceptTerms" [(ngModel)]="isChecked"> Accept Terms
          @if(!isChecked) {
            <small class="error">You must accept terms to proceed.</small>
          }

          <label for="notificationPreference">Notification Preference</label>
          @for(preference of preferences; track preference) {
            <input type="radio" [value]="preference" formControlName="notificationPreference">{{ preference }}
            <br />
          }

          <input type="submit" [disabled]="!newGuildForm.valid" value="Submit">
        </fieldset>
      </form>

      <div class="guild-list-summary">
        <h1>Guild List Summary</h1>

        @if(guilds.length > 0) {
          <ul>
            @for(guild of guilds; track guild) {
              <li>
                <em>Guild Name: </em>{{guild.guildName}}
                <em>Description: </em>{{guild.description}}
                <em>Type: </em>{{guild.type}}
                <em>Terms Accepted: </em>{{guild.acceptTerms}}
                <em>Notification Preference: </em>{{guild.notificationPreference}}
                <br />
              </li>
            }
          </ul>
        } @else {
          <p>No guilds added to the list yet.</p>
        }
      </div>
    </div>
  `,
  styles: `
    .newGuild-form-container {
      display: flex;
      justify-content: space-between;
      width: 75%;
    }

    .guild-form {
      flex: 1;
      margin-right: 20px;
    }

    .guild-list-summary {
      flex: 1;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    label:first-of-type {
      margin-top: 0;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    input {
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="text"] {
      width: 100%;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      display: block;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      float: right;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px
    }

    fieldset {
      margin-bottom: 20px
    }

    .error {
      color: red;
      padding: 5px;
    }
  `
})
export class CreateGuildComponent {
  guildTypes: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  preferences: string[] = ['Email', 'SMS', 'In-App']
  isChecked = false;
  guilds: Guild[];

  newGuildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [null, Validators.compose([Validators.requiredTrue])],
    notificationPreference: [null, Validators.compose([Validators.required])]
  });

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.guilds = [];
  }

  // adds a generated guild to the guilds array
  addToGuildList() {
    const guildToAdd = {
      guildName: this.newGuildForm.value.guildName,
      description: this.newGuildForm.value.description,
      type: this.newGuildForm.value.type,
      acceptTerms: this.newGuildForm.value.acceptTerms,
      notificationPreference: this.newGuildForm.value.notificationPreference
    }

    this.guilds.push(guildToAdd);
  }
}
