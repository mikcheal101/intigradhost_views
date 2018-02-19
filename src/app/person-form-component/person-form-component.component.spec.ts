import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormComponentComponent } from './person-form-component.component';

describe('PersonFormComponentComponent', () => {
  let component: PersonFormComponentComponent;
  let fixture: ComponentFixture<PersonFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
