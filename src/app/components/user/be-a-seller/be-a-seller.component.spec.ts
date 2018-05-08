import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeASellerComponent } from './be-a-seller.component';

describe('BeASellerComponent', () => {
  let component: BeASellerComponent;
  let fixture: ComponentFixture<BeASellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeASellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeASellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
