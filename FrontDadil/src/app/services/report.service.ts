import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Report {
  id: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  status: 'pending' | 'reviewing' | 'resolved';
  imageUrl?: string;
  type: 'illegal_dumping' | 'industrial_waste' | 'water_pollution' | 'other';
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];
  private reportsSubject = new BehaviorSubject<Report[]>([]);
  reports$ = this.reportsSubject.asObservable();

  constructor() {
    // Initialize with mock data
    this.initializeMockData();
  }

  private initializeMockData(): void {
    const mockReports: Report[] = [
      {
        id: '1',
        title: 'Lixo descartado no Parque Municipal',
        description: 'Grande quantidade de lixo descartado próximo ao lago do parque municipal.',
        location: 'Parque Municipal, São Paulo',
        date: new Date(2023, 11, 15),
        status: 'reviewing',
        imageUrl: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg',
        type: 'illegal_dumping'
      },
      {
        id: '2',
        title: 'Descarte irregular de resíduos',
        description: 'Empresa descartando resíduos em área de proteção ambiental.',
        location: 'Av. Industrial, 1500, São Paulo',
        date: new Date(2024, 0, 10),
        status: 'pending',
        imageUrl: 'https://images.pexels.com/photos/4997811/pexels-photo-4997811.jpeg',
        type: 'industrial_waste'
      },
      {
        id: '3',
        title: 'Poluição em córrego',
        description: 'Água do córrego está com coloração anormal e forte odor.',
        location: 'Córrego das Águas, Belo Horizonte',
        date: new Date(2024, 1, 20),
        status: 'resolved',
        imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
        type: 'water_pollution'
      }
    ];

    this.reports = mockReports;
    this.reportsSubject.next([...this.reports]);
  }

  getAllReports(): Report[] {
    return [...this.reports];
  }

  addReport(report: Omit<Report, 'id' | 'date' | 'status'>): void {
    const newReport: Report = {
      ...report,
      id: Date.now().toString(),
      date: new Date(),
      status: 'pending'
    };

    this.reports.unshift(newReport);
    this.reportsSubject.next([...this.reports]);
  }

  getReportById(id: string): Report | undefined {
    return this.reports.find(report => report.id === id);
  }
}