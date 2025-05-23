using System.Text.Json.Serialization;
using System.Collections.ObjectModel;


namespace DadilApplication.Models
{
    public class Usuario
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
        public DateTime DataCadastro { get; set; }
        [JsonIgnore]
        public ICollection<Denuncia>? Denuncias { get; set; }

        public Usuario()
        {
            Denuncias = new Collection<Denuncia>();
        }

        public Usuario(int id, string nome, string email, string telefone, string senha, DateTime dataCadastro)
        {
            UsuarioId = id;
            Nome = nome;
            Email = email;
            Telefone = telefone;
            Senha = senha;
            DataCadastro = dataCadastro;
            Denuncias = new Collection<Denuncia>();
        }
    }
}
