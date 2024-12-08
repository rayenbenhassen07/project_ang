import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../services/reservation.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  tripId: number | null = null;
  tripDetails: any = null;
  showPopup = false; // Control popup visibility

  // Review data array
  reviews: any[] = []; // <-- Declare reviews here

  reservationData = {
    trip_id: 1,
    name: '',
    quantity: '',
    options: '',
    phone: '',
    email: '',
    date: '',
    remarque: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private reviewService: ReviewService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tripId = +params.get('id')!;
      if (this.tripId) {
        this.reservationData.trip_id = this.tripId;
        this.getTripDetails();
        this.loadReviews();
      }
    });
  }

  // Fetch trip details
  getTripDetails(): void {
    if (this.tripId !== null) {
      this.http
        .get(`http://localhost:4200/items/trips/${this.tripId}`)
        .subscribe(
          (data: any) => {
            this.tripDetails = data.data;
          },
          (error) => console.error('Error fetching trip details:', error)
        );
    }
  }

  // Create a reservation
  createReservation(): void {
    this.reservationService.createReservation(this.reservationData).subscribe({
      next: (response) => {
        console.log('Reservation success', response);
        this.showPopup = true; // Show popup upon successful reservation
      },
      error: (error) => console.error('Reservation failed:', error),
    });
  }

  // Close the popup
  closePopup(): void {
    this.showPopup = false;
  }

  // Load reviews from the review service
  loadReviews(): void {
    if (this.tripId !== null) {
      this.http.get(`http://localhost:4200/items/avis/`).subscribe(
        (data: any) => {
          this.reviews = data.data;
        },
        (error) => console.error('Error fetching trip details:', error)
      );
    }
    console.log('Reviews:', this.reviews);
  }

  // Function to generate an array for rendering stars dynamically
  getStarsArray(rate: number): number[] {
    return Array(rate).fill(0); // Generate an array with length = rate
  }
}
