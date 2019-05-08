import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsRecipeDetailPage } from './foods-recipe-detail.page';

describe('FoodsRecipeDetailPage', () => {
  let component: FoodsRecipeDetailPage;
  let fixture: ComponentFixture<FoodsRecipeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsRecipeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsRecipeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
