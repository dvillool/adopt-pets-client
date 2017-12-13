import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAnimalProfileComponent } from './mini-animal-profile.component';

describe('MiniAnimalProfileComponent', () => {
  let component: MiniAnimalProfileComponent;
  let fixture: ComponentFixture<MiniAnimalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniAnimalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
