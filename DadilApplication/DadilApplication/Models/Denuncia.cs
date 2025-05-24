using DadilApplication.Enums;
using System.Text.Json.Serialization;


namespace DadilApplication.Models
{
    public class Denuncia
    {
        public int DenunciaId { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public string? Localizacao { get; set; }
        public string? FotoUrl { get; set; }
        public StatusEnum Status { get; set; }
        public DateTime DataCriacao { get; set; }
        public string UsuarioId { get; set; } = null!;

        [JsonIgnore]
        public ApplicationUser? Usuario { get; set; }
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
            ApplicationUser usuario
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
