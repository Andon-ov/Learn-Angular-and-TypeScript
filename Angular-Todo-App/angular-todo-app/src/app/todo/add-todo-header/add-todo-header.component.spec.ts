import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoHeaderComponent } from './add-todo-header.component';

describe('AddTodoHeaderComponent', () => {
  let component: AddTodoHeaderComponent;
  let fixture: ComponentFixture<AddTodoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoHeaderComponent],
    });
    fixture = TestBed.createComponent(AddTodoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
