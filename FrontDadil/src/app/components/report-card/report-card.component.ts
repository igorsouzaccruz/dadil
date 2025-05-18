import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Report } from '../../services/report.service';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-full animate-fade-in">
      <div *ngIf="report.imageUrl" class="h-48 overflow-hidden">
        <img [src]="report.imageUrl" alt="Imagem da denúncia" class="w-full h-full object-cover">
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-semibold text-secondary-900 truncate">{{ report.title }}</h3>
          <span [ngClass]="statusClass" class="text-xs font-medium px-2 py-1 rounded-full">
            {{ getStatusText() }}
          </span>
        </div>
        <p class="text-sm text-secondary-600 mb-3 line-clamp-2">{{ report.description }}</p>
        <div class="flex items-center text-sm text-secondary-500 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="truncate">{{ report.location }}</span>
        </div>
        <div class="flex items-center text-sm text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{{ report.date | date:'dd/MM/yyyy' }}</span>
        </div>
      </div>
    </div>
  `,
})
export class ReportCardComponent {
  @Input() report!: Report;

  get statusClass(): string {
    switch (this.report.status) {
      case 'pending':
        return 'bg-warning-500 bg-opacity-20 text-warning-600';
      case 'reviewing':
        return 'bg-accent-500 bg-opacity-20 text-accent-600';
      case 'resolved':
        return 'bg-success-500 bg-opacity-20 text-success-600';
      default:
        return '';
    }
  }

  getStatusText(): string {
    switch (this.report.status) {
      case 'pending':
        return 'Pendente';
      case 'reviewing':
        return 'Em análise';
      case 'resolved':
        return 'Resolvido';
      default:
        return '';
    }
  }
}