import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellDisplayComponent } from './sell-display.component';

describe('SellDisplayComponent', () => {
  let component: SellDisplayComponent;
  let fixture: ComponentFixture<SellDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
