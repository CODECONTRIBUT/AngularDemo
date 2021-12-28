import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostscomponentComponent } from './postscomponent.component';

describe('PostscomponentComponent', () => {
  let component: PostscomponentComponent;
  let fixture: ComponentFixture<PostscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
