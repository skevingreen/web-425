import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockCharacters = [
      {id: 42, name: "Ford Prefect", gender: "Male", characterClass: "Rogue"}
    ];

    component.characters = mockCharacters;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display details for each character in the list', () => {
    const mockCharacters: Character[] = [
      {id: 43, name: "Harrison Ford", gender: "Male", characterClass: "Rogue"}
    ];

    component.characters = mockCharacters;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Harrison Ford');
    expect(compiled.querySelector('li').textContent).toContain('Rogue');
  });

  it('should display message for empty character list', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No characters added to the list yet.');
  });
});
