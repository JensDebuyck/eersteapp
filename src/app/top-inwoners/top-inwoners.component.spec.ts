import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInwonersComponent } from './top-inwoners.component';

describe('TopInwonersComponent', () => {
  let component: TopInwonersComponent;
  let fixture: ComponentFixture<TopInwonersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopInwonersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopInwonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
