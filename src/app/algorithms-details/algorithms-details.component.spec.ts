import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlgorithmsDetailsComponent } from './algorithms-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlgorithmsDetailsComponent', () => {
  let component: AlgorithmsDetailsComponent;
  let fixture: ComponentFixture<AlgorithmsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
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
