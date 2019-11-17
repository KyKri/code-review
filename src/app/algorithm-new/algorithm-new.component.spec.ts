import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AlgorithmNewComponent } from './algorithm-new.component';

describe('AlgorithmNewComponent', () => {
  let component: AlgorithmNewComponent;
  let fixture: ComponentFixture<AlgorithmNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmNewComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
