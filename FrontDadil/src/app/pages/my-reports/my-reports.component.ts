import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReportCardComponent } from '../../components/report-card/report-card.component';
import { ReportService, Report } from '../../services/denuncia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReportCardComponent],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss',
})
export class MyReportsComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.reports = this.reportService.getAllReports();
  }

  getPendingCount(): number {
    return this.reports.filter((report) => report.status === 'pending').length;
  }

  getReviewingCount(): number {
    return this.reports.filter((report) => report.status === 'reviewing')
      .length;
  }

  getResolvedCount(): number {
    return this.reports.filter((report) => report.status === 'resolved').length;
  }

  goToNewReport(): void {
    this.router.navigate(['/new-report']);
  }
}
