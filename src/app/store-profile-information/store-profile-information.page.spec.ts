import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProfileInformationPage } from './store-profile-information.page';

describe('StoreProfileInformationPage', () => {
  let component: StoreProfileInformationPage;
  let fixture: ComponentFixture<StoreProfileInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProfileInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProfileInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
