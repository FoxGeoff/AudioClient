import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValueListComponent } from './test-value-list.component';

describe('TestValueListComponent', () => {
  let component: TestValueListComponent;
  let fixture: ComponentFixture<TestValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestValueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
