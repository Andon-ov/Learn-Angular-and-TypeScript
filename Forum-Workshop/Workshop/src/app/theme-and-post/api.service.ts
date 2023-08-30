import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../types/theme';
import { Post } from '../types/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.baseUrl}/themes`);
  }

  getTheme(prop: number): Observable<Theme> {
    return this.http.get<Theme>(`${this.baseUrl}/${prop}`);
  }

  createTheme(themeName: string, postText: string): Observable<any> {
    const newTheme = {
      themeName: themeName,
      posts: postText,
    };

    return this.http.post(`${this.baseUrl}/themes`, newTheme);
  }

  login(username: string, password: string): Observable<any> {
    const newTheme = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.baseUrl}/users/login`, newTheme);
  }
  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ): Observable<any> {
    const newTheme = {
      username: username,
      email: email,
      password: password,
      rePassword: rePassword,
      tel: tel,
    };

    return this.http.post(`${this.baseUrl}/users/register`, newTheme);
  }
  registerPromise(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        rePassword,
        tel,
      }),
    });
  }

  getPosts(prop: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts?limit=${prop}`);
  }
}
// export class ApiService {
//   appUrl = environment.appUrl;
//   constructor(private http: HttpClient) {}

//   getThemes(): Observable<Theme[]> {
//     return this.http.get<Theme[]>(`${this.appUrl}/themes`);
//   }

//   getPosts(prop: number): Observable<Post[]> {
//     console.log(this.appUrl);
//                                 //http:localhost:3000/api/
//      return this.http.get<Post[]>(`${this.appUrl}/posts?limit=${prop}`);
//   }
// }
