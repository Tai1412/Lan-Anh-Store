import { TestBed } from '@angular/core/testing';

import { FoodsRecipeServiceService } from './foods-recipe-service.service';

describe('FoodsRecipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodsRecipeServiceService = TestBed.get(FoodsRecipeServiceService);
    expect(service).toBeTruthy();
  });
});
