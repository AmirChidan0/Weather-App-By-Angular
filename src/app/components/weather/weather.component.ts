import { Component, NgModule } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet,FormsModule,WeatherComponent],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    if (!this.city.trim()) {
      return; // جلوگیری از درخواست با ورودی خالی
    }

    this.weatherService.getWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data', error);
        this.weatherData = null;
      }
    );
  }
}

