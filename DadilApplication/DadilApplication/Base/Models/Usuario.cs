using System.ComponentModel.DataAnnotations;

namespace Base.models
{
    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }

        [Required(ErrorMessage = "O nome é obrigatório.")]
        [MaxLength(100, ErrorMessage = "O nome deve ter no máximo 100 caracteres.")]
        public required string Nome { get; set; }

        [Required(ErrorMessage = "O e-mail é obrigatório.")]
        [EmailAddress(ErrorMessage = "E-mail inválido.")]
        [MaxLength(150)]
        public required string Email { get; set; }

        [Required(ErrorMessage = "O telefone é obrigatório.")]
        [Phone(ErrorMessage = "Telefone inválido.")]
        [MaxLength(20)]
        public required string Telefone { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória.")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "A senha deve ter ao menos 6 caracteres.")]
        public required string Senha { get; set; }

        [Required]
        public DateTime DataCadastro { get; set; }

        public Usuario()
        {
        }

        public Usuario(int id, string nome, string email, string telefone, string senha, DateTime dataCadastro)
        {
            UsuarioId = id;
            Nome = nome;
            Email = email;
            Telefone = telefone;
            Senha = senha;
            DataCadastro = dataCadastro;
        }
    }
}
