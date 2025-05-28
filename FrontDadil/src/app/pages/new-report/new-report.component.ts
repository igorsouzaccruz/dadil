import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StatusEnum } from '../../core/enum/status-enum';
import { NavbarComponent } from "../../components/navbar/navbar.component";

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(10)]],
      localizacao: [''],
      fotoUrl: [''],
      status: [null, Validators.required],
      usuarioId: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.formulario?.valid) {
      const denuncia = this.formulario.value;
      console.log('Denúncia enviada:', denuncia);
      // Chame o serviço aqui, ex: this.denunciaService.criar(denuncia)
    } else {
      this.formulario?.markAllAsTouched();
    }
  }
}