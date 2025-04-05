import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>RPG Character Builder is your goto online resource for enhancing gameplay!</h2>
      <p>
        We aim to be the premier online character generator for all of your RPG needs.  Our
        staff have had a long standing passion for RPG games, and we would love to pass our knowledge
        on to others.  Whether you are new to RPG games or have been playing as long as we have,
        RPG Character Builder has something for everyone - we're just a click away!
      </p>

      <div class="highlights-container">
        <div class="highlight">
          <img src="/assets/Classes.png" alt="image of RPG classes" />
          <p>
            So you've decided to put together an RPG adventure.  Arguably the next step is
            deciding what type of crew you're going to need.  That's where our character creator
            comes in handy.  Sure you may have an idea that a thief would come in handy to steal
            the crown jewels, but who is going to protect them while they work?  Who do you turn to
            when one of the group is injured?  Our character creator can help you build out the
            perfect troop with the right balance of characteristics needed to succeed
            at your next adventure.
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/Guilds.png" alt="image of RPG guild" />
          <p>
            Are you ready to share the skills you’ve been honing with others?  Why not check out our
            guild creator?  Guilds allow people with similar interests to share what they know with each
            other.  There are guilds of all types suitable for mages, thieves, merchants, etc.  Many
            successful adventurers wouldn’t be where they are at today without the help of a guild.  Start
            yours today and begin reaping the rewards.
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/Factions.png" alt="image of dwarf faction" />
          <p>
            Have you been thinking of taking your adventures to the next level?  Then it’s time to check
            out our character factions.  Factions are focused on the big picture.  Maybe you’ve grown
            tired of orcs going on a rampage and burning down villages…join a faction created for the purpose
            of dealing with them.  Do you have political aspirations that have gone unrealized due to the meddlings
            of a particular group of adversaries?  Create your own faction of followers to help get rid of them.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .highlights-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }

    .highlight{
      text-align: center;
      flex: 0 1 calc(33.333% - 20px);
      box-sizing: border-box;
    }

    .highlight img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    .highlight p {
      margin-top: 10px;
    }
  `]
})
export class HomeComponent {

}
