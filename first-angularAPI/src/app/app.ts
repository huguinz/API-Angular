import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  breed: string = '';
  dogImage: string | null = null;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  searchDog(): void {
    if (!this.breed.trim()) {
      this.errorMessage = 'Digite o nome de uma raça!';
      this.dogImage = null;
      return;
    }

    this.apiService.getDogByBreed(this.breed.toLowerCase()).subscribe({
      next: (data) => {
        this.dogImage = data.message;
        this.errorMessage = null;
      },
      error: () => {
        this.errorMessage = 'Raça não encontrada!';
        this.dogImage = null;
      }
    });
  }
}
