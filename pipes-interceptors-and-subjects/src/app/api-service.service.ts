import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService{
  constructor() {}

async  getUsers() {
    return await  fetch('https://jsonplaceholder.typicode.com/users').then((data:any) =>
      data.json()
    )
  }



}
