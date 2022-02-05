import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBridgeDashboardComponent } from './shop-bridge-dashboard.component';

describe('ShopBridgeDashboardComponent', () => {
  let component: ShopBridgeDashboardComponent;
  let fixture: ComponentFixture<ShopBridgeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBridgeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBridgeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
