import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamentDetailsComponent } from './testament-details.component';

describe('TestamentDetailsComponent', () => {
  let component: TestamentDetailsComponent;
  let fixture: ComponentFixture<TestamentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
