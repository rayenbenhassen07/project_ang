import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/api/trips/trip.service'; // Import TripService
import { HttpErrorResponse } from '@angular/common/http';
import { ReservationService } from '../services/reservation.service';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips: Array<any> = []; // Array to store trips data

  constructor(
    private tripService: TripService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    // Fetch trips when the component initializes
    this.tripService.getTrips().subscribe({
      next: (response) => {
        this.trips = response.data; // Assuming 'data' contains the trip array
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching trips:', error);
      },
    });

    // Call the method to test reservation
    this.createReservation();
  }

  createReservation(): void {
    const testReservation = {
      tripId: 2, // Example trip ID
      name: 'John Doe',
      quantity: JSON.stringify({ single: 1, double: 1 }), // Ensure quantity is an object stringified
      phone: '123456789',
      email: 'johndoe@example.com',
      tripDate: '2024-12-20', // Example trip date in the expected format
      remarque: 'No remarks',
      options: JSON.stringify({ time: '11:00 AM', periode: '1h 30min' }), // Ensure options are stringified if it's an object
    };

    this.reservationService.createReservation(testReservation).subscribe({
      next: (response) => {
        console.log('Reservation created successfully:', response);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating reservation:', error);
      },
    });
  }
}
