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
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.baseUrl}/themes`);
  }

  getTheme(id: number): Observable<Theme> {
    return this.http.get<Theme>(`${this.baseUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string): Observable<any> {
    return this.http.post(`/api/themes`, {
      themeName,
      postText,
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
