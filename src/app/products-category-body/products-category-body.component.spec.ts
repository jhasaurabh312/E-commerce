import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryBodyComponent } from './products-category-body.component';

describe('ProductsCategoryBodyComponent', () => {
  let component: ProductsCategoryBodyComponent;
  let fixture: ComponentFixture<ProductsCategoryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCategoryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
