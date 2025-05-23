import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-new-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    
    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8 animate-fade-in">
        <h1 class="text-3xl font-bold text-secondary-900 mb-2">Nova Denúncia</h1>
        <p class="text-secondary-600">Preencha o formulário abaixo para reportar um problema ambiental.</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6 animate-slide-up">
        <form (ngSubmit)="onSubmit()" #reportForm="ngForm">
          <!-- Title -->
          <div class="form-group">
            <label for="title" class="form-label">Título da Denúncia</label>
            <input 
              type="text" 
              id="title" 
              name="title"
              [(ngModel)]="report.title"
              required
              class="form-input"
              placeholder="Ex: Descarte irregular de lixo"
            />
          </div>
          
          <!-- Type -->
          <div class="form-group">
            <label for="type" class="form-label">Tipo de Problema</label>
            <select
              id="type"
              name="type"
              [(ngModel)]="report.type"
              required
              class="form-input"
            >
              <option value="" disabled>Selecione o tipo de problema</option>
              <option value="illegal_dumping">Descarte irregular de lixo</option>
              <option value="industrial_waste">Resíduos industriais</option>
              <option value="water_pollution">Poluição de água</option>
              <option value="other">Outro</option>
            </select>
          </div>
          
          <!-- Location -->
          <div class="form-group">
            <label for="location" class="form-label">Localização</label>
            <input 
              type="text" 
              id="location" 
              name="location"
              [(ngModel)]="report.location"
              required
              class="form-input"
              placeholder="Ex: Rua ABC, 123, São Paulo"
            />
          </div>
          
          <!-- Description -->
          <div class="form-group">
            <label for="description" class="form-label">Descrição</label>
            <textarea 
              id="description" 
              name="description"
              [(ngModel)]="report.description"
              required
              rows="4"
              class="form-input resize-none"
              placeholder="Descreva detalhadamente o problema ambiental que você encontrou..."
            ></textarea>
          </div>
          
          <!-- Image URL -->
          <div class="form-group">
            <label for="imageUrl" class="form-label">URL da Imagem (opcional)</label>
            <input 
              type="url" 
              id="imageUrl" 
              name="imageUrl"
              [(ngModel)]="report.imageUrl"
              class="form-input"
              placeholder="https://exemplo.com/imagem.jpg"
            />
            <p class="text-xs text-secondary-500 mt-1">Cole o link de uma imagem que mostre o problema.</p>
          </div>
          
          <!-- Submit Button -->
          <div class="mt-8 flex items-center justify-between">
            <button 
              type="button"
              (click)="goBack()"
              class="btn btn-secondary"
            >
              Cancelar
            </button>
            
            <button 
              type="submit"
              [disabled]="!reportForm.valid || isSubmitting"
              class="btn btn-primary flex items-center"
            >
              <span *ngIf="isSubmitting" class="mr-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              Enviar Denúncia
            </button>
          </div>
        </form>
      </div>
      
      <!-- Success Modal -->
      <div *ngIf="showSuccessModal" class="fixed inset-0 bg-secondary-900 bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-slide-up">
          <div class="text-center">
            <div class="bg-success-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-secondary-900 mb-2">Denúncia Enviada!</h2>
            <p class="text-secondary-600 mb-6">Sua denúncia foi registrada com sucesso e será analisada pela nossa equipe.</p>
            <div class="flex justify-center">
              <button 
                (click)="goToReports()"
                class="btn btn-primary"
              >
                Ver Minhas Denúncias
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
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
    imageUrl: ''
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