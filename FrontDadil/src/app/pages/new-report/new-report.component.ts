import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReportService } from '../../services/denuncia.service';

@Component({
  selector: 'app-new-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './new-report.component.html',
  styleUrl: './new-report.component.scss',
})
export class NewReportComponent {
  report: {
    title: string;
    description: string;
    location: string;
    type: 'illegal_dumping' | 'industrial_waste' | 'water_pollution' | 'other';
    imageUrl: string;
  } = {
    title: '',
    description: '',
    location: '',
    type: 'illegal_dumping',
    imageUrl: '',
  };

  isSubmitting = false;
  showSuccessModal = false;

  constructor(private reportService: ReportService, private router: Router) {}

  onSubmit(): void {
    this.isSubmitting = true;

    // Simulate API call delay
    setTimeout(() => {
      this.reportService.addReport(this.report);
      this.isSubmitting = false;
      this.showSuccessModal = true;
    }, 1500);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  goToReports(): void {
    this.router.navigate(['/my-reports']);
  }
}
