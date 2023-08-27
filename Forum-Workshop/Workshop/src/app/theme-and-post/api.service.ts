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
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('http://localhost:3000/api/themes');
  }

  getTheme(prop: number): Observable<Theme> {
    return this.http.get<Theme>(`http://localhost:3000/api/themes/${prop}`);
  }

  getPosts(prop: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `http://localhost:3000/api/posts?limit=${prop}`
    );
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
