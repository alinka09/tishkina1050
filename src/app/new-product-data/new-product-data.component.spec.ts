import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductDataComponent } from './new-product-data.component';

describe('NewProductDataComponent', () => {
  let component: NewProductDataComponent;
  let fixture: ComponentFixture<NewProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
