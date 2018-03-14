import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamentComponent } from './testament.component';

describe('TestamentComponent', () => {
  let component: TestamentComponent;
  let fixture: ComponentFixture<TestamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
