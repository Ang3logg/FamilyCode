import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesomosSection } from './quienesomos-section';

describe('QuienesomosSection', () => {
  let component: QuienesomosSection;
  let fixture: ComponentFixture<QuienesomosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienesomosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesomosSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
