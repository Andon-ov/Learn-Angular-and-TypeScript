import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../todo.service';
import { FullTodo } from './../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todo: FullTodo | undefined;

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
    this.activatedRoute.params.subscribe((v) => console.log(v));
    console.log('snapshot.data', this.activatedRoute.snapshot.data['todo']);
    this.todo = this.activatedRoute.snapshot.data['todo'];

    // // Subscribe to changes in route parameters
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const id: string | null = params.get('id');
    //   if (id !== null) {
    //     // Observable
    //     this.todoService.getTodo$(id).subscribe((data) => {
    //       this.todo = data;
    //     });
    //   }
    // });
  }

  deleteTodoHandler(todo: FullTodo | undefined) {
    // Check if `todo` is defined.
    if (todo) {
      // Get the ID of `todo`.
      let id = this.todo?.id ?? '';
      // Convert `id` to `string` before passing it to the method.
      this.todoService.deleteTodo(id as string).subscribe();
      // Redirect to the home page.
      // this.redirectToHome();
    }
  }
}
