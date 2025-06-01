import { StatusEnum } from "./enum/status-enum";

export interface Denuncia {
  denunciaId?: number;
  descricao: string;
  localizacao?: string;
  fotoUrl?: string;
  status: StatusEnum | number;
  dataCriacao?: Date;
  usuarioId: string;
}

