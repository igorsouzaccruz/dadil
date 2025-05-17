using Base.models;
using Microsoft.EntityFrameworkCore;

namespace DadilApplication.DBContext
{
    public class AppDbContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Denuncia> Denuncias { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}
