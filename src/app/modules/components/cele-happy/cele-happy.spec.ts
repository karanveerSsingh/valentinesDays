import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleHappy } from './cele-happy';

describe('CeleHappy', () => {
  let component: CeleHappy;
  let fixture: ComponentFixture<CeleHappy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeleHappy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeleHappy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
