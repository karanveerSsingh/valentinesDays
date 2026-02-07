import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinesComponent } from './valentines-component';

describe('ValentinesComponent', () => {
  let component: ValentinesComponent;
  let fixture: ComponentFixture<ValentinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
