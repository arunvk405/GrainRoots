import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight, Sprout } from 'lucide-angular';

interface CarouselSlide {
  url: string;
  title: string;
  subtitle: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly Sprout = Sprout;

  currentSlide = 0;
  private intervalId: any;

  carouselImages: CarouselSlide[] = [
    {
      url: './assets/images/carousal_1.png',
      title: 'Eco-Friendly Bamboo Products',
      subtitle: 'Sustainable Living Starts Here'
    },
    {
      url: './assets/images/carousal_2_1.png',
      title: 'Natural & Biodegradable',
      subtitle: 'Care for Yourself, Care for Earth'
    },
    {
      url: './assets/images/carousal_3.png',
      title: 'Premium Quality Products',
      subtitle: 'Handcrafted with Love'
    }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Bamboo Toothbrush',
      price: '₹59',
      image: './assets/images/brush_1.jpg',
      description: 'Eco-friendly bamboo toothbrush with soft bristles'
    },
    {
      id: 2,
      name: 'Bamboo Tongue Cleaner',
      price: '₹39',
      image: './assets/images/toungue_1.jpg',
      description: 'Natural bamboo tongue cleaner for oral hygiene'
    },
    {
      id: 3,
      name: 'Wooden Comb',
      price: '₹199',
      image: './assets/images/comb.jpg',
      description: 'Handcrafted wooden comb for healthy hair'
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}