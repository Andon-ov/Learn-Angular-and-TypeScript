import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../todo.service';
import { GetTodo } from './../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todo: GetTodo | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  // Function to redirect to the home page
  redirectToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      if (id !== null) {
        // Observable
        this.todoService.getTodo$(id).subscribe((data) => {
          this.todo = data;
        });
      }
    });
  }

  deleteTodoHandler(todo: GetTodo | undefined) {
    // Check if `todo` is defined.
    if (todo) {
      // Use the Safe Navigation Operator to access `id` directly.
      const id = todo.id;
      // Convert `id` to `string` before passing it to the method.
      this.todoService.deleteTodo(id.toString()).subscribe(() => {
        // Handle the successful deletion here if needed.
        // For example, you can navigate back to the home page.
        this.redirectToHome();
      });
    }
  }
}
