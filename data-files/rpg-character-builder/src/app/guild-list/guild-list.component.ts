import { Component, Input } from '@angular/core';
import { Guild } from '../create-guild/create-guild.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `,
  styles: `

  `
})
export class GuildListComponent {
  @Input() guilds!: Guild[];
}
