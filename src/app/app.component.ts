import { RouterOutlet } from '@angular/router';
import { FormsModule   } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet,FormsModule,WeatherComponent],
  providers:[WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
