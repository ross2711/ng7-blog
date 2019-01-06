import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIntroComponent } from './post-intro.component';

describe('PostComponent', () => {
  let component: PostIntroComponent;
  let fixture: ComponentFixture<PostIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
