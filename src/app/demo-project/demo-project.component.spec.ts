import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProjectComponent } from './demo-project.component';

describe('DemoProjectComponent', () => {
  let component: DemoProjectComponent;
  let fixture: ComponentFixture<DemoProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoProjectComponent]
    });
    fixture = TestBed.createComponent(DemoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
