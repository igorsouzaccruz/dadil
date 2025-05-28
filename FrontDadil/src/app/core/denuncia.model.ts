import { StatusEnum } from "./enum/status-enum";

export interface Denuncia {
  denunciaId?: number;
  descricao: string;
  localizacao?: string;
  fotoUrl?: string;
  status: StatusEnum;
  dataCriacao?: Date;
  usuarioId: string;
}

