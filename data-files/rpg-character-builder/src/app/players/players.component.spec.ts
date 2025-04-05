import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   *  Created by default when the component is generated
   */
  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 2
   */
  it('should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;          // Get the compiled HTML of the component
    const menuItems = compiled.querySelectorAll('.player');         // Get all the player items
    expect(menuItems.length).toEqual(component.characters.length);  // Check if the number of menu items is equal to the number of items in the menu array
  })
});
