import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  // setup for each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // default test to make sure component was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // make sure that when a character is added that the corresponding id is generated correctly (a number between 1 and 1000)
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.addToCharacterList();
    expect(component.characters[0].id).toBeGreaterThan(0);
    expect(component.characters[0].id).toBeLessThan(1000);
    expect(Number.isInteger(component.characters[0].id)).toBe(true);
  });

  // customize a character, add it to the characters array, and check that after being added it has the expected values
  it('should add a character with correct customization', () => {
    component.name = "Hope";
    component.selectedGenderId = 3;
    component.selectedClassId = 3;
    component.addToCharacterList();

    const addedCharacter = component.characters[0];

    expect(addedCharacter.name).toBe("Hope");
    expect(addedCharacter.gender).toBe("Other");
    expect(addedCharacter.characterClass).toBe("Rogue");
  });

  // check that resetting the form puts teh form values back to default
  it('should reset all fields to their default values after resetForm is called', () => {
    component.name = "Ted";
    component.selectedGenderId = 2;
    component.selectedClassId = 2;

    component.resetForm();

    expect(component.name).toBe("");
    expect(component.selectedGenderId).toBe(1);
    expect(component.selectedClassId).toBe(1);
  });
});
