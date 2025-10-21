import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Sprout } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly Sprout = Sprout;
  currentYear = new Date().getFullYear();
}