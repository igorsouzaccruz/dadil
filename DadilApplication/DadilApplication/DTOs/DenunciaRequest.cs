﻿namespace DadilApplication.DTOs
{
    public record DenunciaRequest(
     string Descricao,
     string? Localizacao,
     string? FotoUrl,
     int Status,
     DateTime DataCriacao,
     string UsuarioId
 );
}
