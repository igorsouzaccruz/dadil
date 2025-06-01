import { Denuncia } from './../../core/denuncia.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StatusEnum } from '../../core/enum/status-enum';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DenunciaService } from '../../services/denuncia.service';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncia-form',
  templateUrl: './new-report.component.html',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule],
})
export class DenunciaFormComponent implements OnInit {
  public formulario!: FormGroup;
  public statusOptions = [
    { label: 'Pendente', valor: StatusEnum.PENDENTE },
    { label: 'Em análise', valor: StatusEnum.EM_ANALISE },
    { label: 'Resolvido', valor: StatusEnum.RESOLVIDO },
  ];

  constructor(private fb: FormBuilder, private denunciaService: DenunciaService, private jwtService: JwtService, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descricao: ['', [Validators.required]],
      localizacao: [''],
      fotoUrl: [''],
      status: [StatusEnum.PENDENTE.id],
      usuarioId: [null],
    });
  }

  submit(): void {
    debugger
    if (this.formulario?.valid) {
      var denuncia = this.formulario.value;
      console.log('Denúncia enviada:', denuncia);
      console.log('ID do user: ', this.jwtService.getDecodedToken().id);
      console.log('Status: ', denuncia.status);
      console.log('Status: ', StatusEnum.PENDENTE.id);
      
      
      denuncia.usuarioId = this.jwtService.getDecodedToken().id;

      this.denunciaService.createDenuncia(denuncia).subscribe({
        next: () =>{
          this.router.navigate(['/my-reports']);
        }
      })
    } else {
      this.formulario?.markAllAsTouched();
    }
  }
}