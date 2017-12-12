import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnimalInfoPageComponent } from './profile-animal-info-page.component';

describe('ProfileAnimalInfoPageComponent', () => {
  let component: ProfileAnimalInfoPageComponent;
  let fixture: ComponentFixture<ProfileAnimalInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnimalInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAnimalInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
