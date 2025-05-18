using Base.enums;
using System.ComponentModel.DataAnnotations;

namespace Base.models
{
    public class Denuncia
    {
        [Key]
        public int DenunciaId { get; set; }

        [Required(ErrorMessage = "A descrição é obrigatória.")]
        [MaxLength(1000, ErrorMessage = "A descrição deve ter no máximo 1000 caracteres.")]
        public string Descricao { get; set; } = string.Empty;

        [MaxLength(500, ErrorMessage = "A localização deve ter no máximo 500 caracteres.")]
        public string? Localizacao { get; set; }

        [MaxLength(255, ErrorMessage = "A URL da foto deve ter no máximo 255 caracteres.")]
        [Url(ErrorMessage = "A URL da foto não é válida.")]
        public string? FotoUrl { get; set; }

        [Required(ErrorMessage = "O status é obrigatório.")]
        public StatusEnum Status { get; set; }

        [Required(ErrorMessage = "A data de criação é obrigatória.")]
        public DateTime DataCriacao { get; set; }

        [Required(ErrorMessage = "O usuário é obrigatório.")]
        public required Usuario Usuario { get; set; }
        public Denuncia()
        {
        }

        public Denuncia(
            int id, 
            string descricao, 
            string localizacao, 
            string fotoUrl, 
            StatusEnum status, 
            DateTime dataCriacao,
            Usuario usuario
            )
        {
            DenunciaId = id;
            Descricao = descricao;
            Localizacao = localizacao;
            FotoUrl = fotoUrl;
            Status = status;
            DataCriacao = dataCriacao;
            Usuario = usuario;
        }
    }

}
