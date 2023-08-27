import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeContentComponent } from './theme-content.component';

describe('ThemeContentComponent', () => {
  let component: ThemeContentComponent;
  let fixture: ComponentFixture<ThemeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeContentComponent]
    });
    fixture = TestBed.createComponent(ThemeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
