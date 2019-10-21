import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsListComponent } from './topics-list.component';
import { By } from '@angular/platform-browser';

describe('TopicsListComponent', () => {
  let component: TopicsListComponent;
  let fixture: ComponentFixture<TopicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Code Review Topics in h2 element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Topics');
  });

  it('should render Algorithms, Concepts and Data Structures in h3 elements', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('h3'));
    const algElement = debugElements[0].nativeElement;
    const conElement = debugElements[1].nativeElement;
    const datElement = debugElements[2].nativeElement;

    expect(algElement.textContent).toContain('Algorithms');
    expect(conElement.textContent).toContain('Concepts');
    expect(datElement.textContent).toContain('Data Structures');
  });
});
