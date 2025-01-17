import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostOpinionComponent } from './cost-opinion.component';

describe('CostOpinionComponent', () => {
  let component: CostOpinionComponent;
  let fixture: ComponentFixture<CostOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostOpinionComponent]
    });
    fixture = TestBed.createComponent(CostOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
