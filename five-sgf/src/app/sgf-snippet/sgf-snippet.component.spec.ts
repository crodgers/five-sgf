import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgfSnippetComponent } from './sgf-snippet.component';

describe('SgfSnippetComponent', () => {
  let component: SgfSnippetComponent;
  let fixture: ComponentFixture<SgfSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgfSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgfSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
