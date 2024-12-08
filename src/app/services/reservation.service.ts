import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'http://localhost:5001/api';

  constructor(private http: HttpClient) {}

  // Add the createReservation method
  createReservation(reservationData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation`, reservationData);
  }
}
