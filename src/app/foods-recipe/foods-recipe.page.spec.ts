import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsRecipePage } from './foods-recipe.page';

describe('FoodsRecipePage', () => {
  let component: FoodsRecipePage;
  let fixture: ComponentFixture<FoodsRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsRecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
