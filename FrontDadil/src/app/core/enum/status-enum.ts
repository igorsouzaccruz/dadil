export class StatusEnum {
  static readonly PENDENTE = new StatusEnum(1, 'Pendente');
  static readonly EM_ANALISE = new StatusEnum(2, 'Em análise');
  static readonly RESOLVIDO = new StatusEnum(3, 'Resolvido');

  static readonly LIST: StatusEnum[] = [
    StatusEnum.PENDENTE,
    StatusEnum.EM_ANALISE,
    StatusEnum.RESOLVIDO,
  ];

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {}

  static fromId(id: number): StatusEnum | undefined {
    return StatusEnum.LIST.find(s => s.id === id);
  }
}