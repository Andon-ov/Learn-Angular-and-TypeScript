import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { FullTodo } from '../todo';

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
    // Subscribe to changes in route parameters
    this.activatedRoute.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      if (id !== null) {
        // Fetch todo details with Promise based on the id from the route
        // this.todoService.getTodo(id).then((data: FullTodo) => {
        //   this.todo = data;

        // Observable
        this.todoService.getTodo$(id).subscribe((data) => {
          this.todo = data;
        });
      }
    });
  }
}
