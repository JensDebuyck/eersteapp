import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandenComponent } from './landen.component';

describe('LandenComponent', () => {
  let component: LandenComponent;
  let fixture: ComponentFixture<LandenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
