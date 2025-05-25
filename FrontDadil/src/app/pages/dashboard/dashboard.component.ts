import { JwtService } from './../../services/jwt.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RegionChartComponent } from '../../components/region-chart/region-chart.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, RegionChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  user: any|null = '';

  constructor(private authService: AuthService, private jwtservice: JwtService) {
   this.user = this.jwtservice.getUser()?.username;
  }
}