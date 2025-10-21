import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Bamboo Toothbrush',
      price: '₹99',
      image: './assets/images/brush_1.jpg',
      description: 'Eco-friendly bamboo toothbrush with soft bristles'
    },
    {
      id: 2,
      name: 'Bamboo Tongue Cleaner',
      price: '₹79',
      image: './assets/images/toungue_1.jpg',
      description: 'Natural bamboo tongue cleaner for oral hygiene'
    },
    {
      id: 3,
      name: 'Bamboo Loofah',
      price: '₹149',
      image: './assets/images/loofah.jpg',
      description: 'Natural exfoliating bamboo loofah for skin care'
    },
    {
      id: 4,
      name: 'Wooden Comb',
      price: '₹199',
      image: './assets/images/comb.jpg',
      description: 'Handcrafted wooden comb for healthy hair'
    },
    {
      id: 5,
      name: 'Wooden Pen',
      price: '₹129',
      image: './assets/images/pen.jpg',
      description: 'Elegant wooden pen for sustainable writing'
    }
  ];

  onInquire(product: Product) {
    alert(`Inquiry for ${product.name}. Contact us at info@grainroots.com`);
  }
}