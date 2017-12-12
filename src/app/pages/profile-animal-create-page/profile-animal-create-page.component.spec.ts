import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnimalCreatePageComponent } from './profile-animal-create-page.component';

describe('ProfileAnimalCreatePageComponent', () => {
  let component: ProfileAnimalCreatePageComponent;
  let fixture: ComponentFixture<ProfileAnimalCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnimalCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAnimalCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
