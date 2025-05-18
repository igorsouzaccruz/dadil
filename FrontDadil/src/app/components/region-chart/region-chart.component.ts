import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-region-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card p-6">
      <h3 class="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Denúncias por Região</h3>
      <div class="relative h-[300px]">
        <canvas id="regionChart"></canvas>
      </div>
    </div>
  `
})
export class RegionChartComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = document.getElementById('regionChart') as HTMLCanvasElement;
    
    const data = {
      labels: ['Sul', 'Sudeste', 'Centro-Oeste', 'Nordeste', 'Norte'],
      datasets: [{
        label: 'Denúncias',
        data: [150, 280, 120, 190, 160],
        backgroundColor: [
          'rgba(46, 204, 113, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(155, 89, 182, 0.7)',
          'rgba(241, 196, 15, 0.7)',
          'rgba(231, 76, 60, 0.7)'
        ],
        borderColor: [
          'rgba(46, 204, 113, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(155, 89, 182, 1)',
          'rgba(241, 196, 15, 1)',
          'rgba(231, 76, 60, 1)'
        ],
        borderWidth: 1
      }]
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
}