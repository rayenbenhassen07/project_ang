import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  galleryImages = [
    { src: 'assets/quad1.jpeg', alt: 'Quad Adventure' },
    { src: 'assets/quad2.jpeg', alt: 'Quad Ride in the Desert' },
    { src: 'assets/camel.jpeg', alt: 'Camel Ride in Djerba' },
    { src: 'assets/G1.jpeg', alt: 'Group Adventure' },
    { src: 'assets/G2.jpeg', alt: 'Beach Sunset' },
    { src: 'assets/G3.jpeg', alt: 'Desert Landscape' },
    { src: 'assets/G4.jpeg', alt: 'Excursion on the Beach' },
    { src: 'assets/G9.jpeg', alt: 'Scenic Views of Djerba' },
    { src: 'assets/G6.jpeg', alt: 'Tourist Group at Djerba' },
    { src: 'assets/G7.jpeg', alt: 'Fun with Friends' },
    { src: 'assets/G8.jpeg', alt: 'Adventure Time' },
    { src: 'assets/G12.jpeg', alt: 'Djerba Adventure' },
    { src: 'assets/G11.jpeg', alt: 'Exploring the Desert' },
    { src: 'assets/G10.jpeg', alt: 'Water Sports Fun' },
    { src: 'assets/jetski.jpeg', alt: 'Jetski Adventure' },
  ];
}
