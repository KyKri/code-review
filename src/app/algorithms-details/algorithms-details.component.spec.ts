import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsDetailsComponent } from './algorithms-details.component';

describe('AlgorithmsDetailsComponent', () => {
  let component: AlgorithmsDetailsComponent;
  let fixture: ComponentFixture<AlgorithmsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
