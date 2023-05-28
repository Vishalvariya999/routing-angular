import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtechnologiesComponent } from './ourtechnologies.component';

describe('OurtechnologiesComponent', () => {
  let component: OurtechnologiesComponent;
  let fixture: ComponentFixture<OurtechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurtechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurtechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
