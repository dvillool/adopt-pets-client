import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnimalPageComponent } from './profile-animal-page.component';

describe('ProfileAnimalPageComponent', () => {
  let component: ProfileAnimalPageComponent;
  let fixture: ComponentFixture<ProfileAnimalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnimalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
