export interface Denuncia {
  denunciaId?: number;
  descricao: string;
  localizacao?: string;
  fotoUrl?: string;
  status: StatusEnum;
  dataCriacao?: Date;
  usuarioId: string;
}

export enum StatusEnum {
  Pendente = 0,
  EmAnalise = 1,
  Concluida = 2
}