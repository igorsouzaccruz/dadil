import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DenunciaCardComponent } from '../../components/report-card/report-card.component';
import { DenunciaService} from '../../services/denuncia.service';
import { Router } from '@angular/router';
import { Denuncia } from '../../core/denuncia.model';
import { StatusEnum } from '../../core/enum/status-enum';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DenunciaCardComponent],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss',
})
export class MyReportsComponent implements OnInit {
  denuncias: Denuncia[] = [];

  constructor(private reportService: DenunciaService, private router: Router) {}

  ngOnInit(): void {
    this.reportService.getAllDenuncias().subscribe(denuncias => {
      this.denuncias = denuncias;
    });
  }

  getPendingCount(): number {
    return this.denuncias.filter((denuncia) => denuncia.status === StatusEnum.PENDENTE.id).length;
  }

  getReviewingCount(): number {
    return this.denuncias.filter((denuncia) => denuncia.status === StatusEnum.EM_ANALISE.id)
      .length;
  }

  getResolvedCount(): number {
    return this.denuncias.filter((denuncia) => denuncia.status === StatusEnum.RESOLVIDO.id).length;
  }

  goToNewReport(): void {
    this.router.navigate(['/new-report']);
  }
}
