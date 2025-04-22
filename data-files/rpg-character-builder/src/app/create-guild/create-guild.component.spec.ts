import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form should be invalid when empty', () => {
    expect(component.newGuildForm.valid).toBeFalsy();
  });

  it('form should be valid when filled correctly', () => {
    component.newGuildForm.controls['guildName'].setValue('Ultimate Warriors');
    component.newGuildForm.controls['description'].setValue('We will crush all that oppose us.');
    component.newGuildForm.controls['type'].setValue('Competitive');
    component.newGuildForm.controls['acceptTerms'].setValue(true);
    component.newGuildForm.controls['notificationPreference'].setValue('SMS');

    expect(component.newGuildForm.valid).toBeTruthy();
  });

  it('should call addToGuildList on form submit with valid data', () => {
    spyOn(component, 'addToGuildList');

    component.newGuildForm.controls['guildName'].setValue('Ultimate Warriors');
    component.newGuildForm.controls['description'].setValue('We will crush all that oppose us.');
    component.newGuildForm.controls['type'].setValue('Competitive');
    component.newGuildForm.controls['acceptTerms'].setValue(true);
    component.newGuildForm.controls['notificationPreference'].setValue('SMS');
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.addToGuildList).toHaveBeenCalled();
  });
});
