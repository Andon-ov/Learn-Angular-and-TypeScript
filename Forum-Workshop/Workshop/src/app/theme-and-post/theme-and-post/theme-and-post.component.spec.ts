import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAndPostComponent } from './theme-and-post.component';

describe('ThemeAndPostComponent', () => {
  let component: ThemeAndPostComponent;
  let fixture: ComponentFixture<ThemeAndPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeAndPostComponent],
    });
    fixture = TestBed.createComponent(ThemeAndPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
