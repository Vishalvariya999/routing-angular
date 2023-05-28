import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagloneExpcardComponent } from './taglone-expcard.component';

describe('TagloneExpcardComponent', () => {
  let component: TagloneExpcardComponent;
  let fixture: ComponentFixture<TagloneExpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagloneExpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagloneExpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
