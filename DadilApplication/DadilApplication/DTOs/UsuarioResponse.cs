namespace DadilApplication.DTOs
{
    public record UsuarioResponse(
           string UsuarioId,
           string Nome,
           string Email,
           string Telefone,
           DateTime DataCadastro
    );
}
