import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Character Builder</h1>
      <h2>The RPG Character Builder is your goto online resource for enhancing gameplay!</h2>
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
            deciding what type of crew you're going to need.  That's where or class recommendations
            come in handy.  Sure you may have an idea that a thief would come in handy to steal
            the crown jewels, but who is going to protect them while they work?  Who do you turn to
            when one of the group is injured?  Our section on RPG classes can help you build out the
            perfect troop of characters with the right balance of characteristics needed to succeed
            at your next adventure.
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/Weapons.png" alt="image of RPG weapons" />
          <p>
            Once you've decided on the makeup of your crew, they are going to need to outfit
            themselves with the latest weaponry to protect themselves from inevitable perils.
            Our section on weapons can help you find the optimum protection for your class
            and budget.  We can also provide you with tips for keeping your weapons in tip-top
            shape.  Interested in experimenting with magically enhanced weapons?  We can help
            with that as well!
          </p>
        </div>

        <div class="highlight">
          <img src="/assets/Armor.png" alt="image of people playing games" />
          <p>
            While it may be true that the best defense is a good offense, one would be foolish
            to brave the wilds without at least a modicum of armor.  Our armor section is
            comprised of the latest information on armor for all class types.  Whether you're
            a mage or a warrior, we have you covered.  Not only will our information on armor
            help to keep your character safe, they will look awesome doing it.
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
