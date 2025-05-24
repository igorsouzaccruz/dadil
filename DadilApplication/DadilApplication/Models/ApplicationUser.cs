using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace DadilApplication.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        public DateTime DataCadastro { get; set; }
        [JsonIgnore]
        public ICollection<Denuncia>? Denuncias { get; set; }
    }
}
