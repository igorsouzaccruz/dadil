import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusEnum } from '../../core/enum/status-enum';
import { Denuncia } from '../../core/denuncia.model';


@Component({
  selector: 'app-denuncia-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-card.component.html',
})
export class DenunciaCardComponent {
  @Input() denuncia!: Denuncia;

  get statusClass(): string {
    switch (this.denuncia.status) {
      case StatusEnum.PENDENTE:
        return 'bg-warning-500 bg-opacity-20 text-warning-600';
      case StatusEnum.EM_ANALISE:
        return 'bg-accent-500 bg-opacity-20 text-accent-600';
      case StatusEnum.RESOLVIDO:
        return 'bg-success-500 bg-opacity-20 text-success-600';
      default:
        return '';
    }
  }

  getStatusText(): string {
    return StatusEnum.fromId(this.denuncia.status.id)?.descricao ?? '';
  }
}