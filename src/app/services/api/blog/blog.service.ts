import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // Define the API URL
  private apiUrl = '/items/blog'; // Use the proxy path instead of the full URL

  constructor(private http: HttpClient) {}

  // Method to get trips from the API
  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
