import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { Guild } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockGuilds = [
      {guildName: 'Wu-Tang Clan', description: "Nothing to mess with.", type: "Competitive", acceptTerms: true, notificationPreference: "SMS"}
    ];

    component.guilds = mockGuilds;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display details for each guild in the list', () => {
    const mockGuilds: Guild[] = [
      {guildName: "Rebel Alliance", description: "Scruffy Nerf herders", type: "Social", acceptTerms: true, notificationPreference: "Email"}
    ];

    component.guilds = mockGuilds;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Scruffy Nerf herders');
    expect(compiled.querySelector('li').textContent).toContain('Email');
  });

  it('should display message for empty guild list', () => {
    component.guilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No guilds added to the list yet.');
  });
});
