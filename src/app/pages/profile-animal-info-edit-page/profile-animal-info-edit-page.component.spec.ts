import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnimalInfoEditPageComponent } from './profile-animal-info-edit-page.component';

describe('ProfileAnimalInfoEditPageComponent', () => {
  let component: ProfileAnimalInfoEditPageComponent;
  let fixture: ComponentFixture<ProfileAnimalInfoEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnimalInfoEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAnimalInfoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
