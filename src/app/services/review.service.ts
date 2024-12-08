import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = '/items/avis';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
