using DadilApplication.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DadilApplication.DBContext
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario>? Usuarios { get; set; }
        public DbSet<Denuncia>? Denuncias { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // -------------------- Usuario --------------------
            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuarios");
                entity.HasKey(u => u.UsuarioId);
                entity.Property(u => u.UsuarioId).HasColumnName("usuarioid");

                entity.Property(u => u.Nome)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("nome");

                entity.Property(u => u.Email)
                    .IsRequired()
                    .HasMaxLength(150)
                    .HasColumnName("email");

                entity.Property(u => u.Telefone)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("telefone");

                entity.Property(u => u.Senha)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("senha");

                entity.Property(u => u.DataCadastro)
                    .IsRequired()
                    .HasColumnName("datacadastro");
            });

            // -------------------- Denuncia --------------------
            modelBuilder.Entity<Denuncia>(entity =>
            {
                entity.ToTable("denuncias");
                entity.HasKey(d => d.DenunciaId);
                entity.Property(d => d.DenunciaId).HasColumnName("denunciaid");

                entity.Property(d => d.Descricao)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .HasColumnName("descricao");

                entity.Property(d => d.Localizacao)
                    .HasMaxLength(500)
                    .HasColumnName("localizacao");

                entity.Property(d => d.FotoUrl)
                    .HasMaxLength(1000)
                    .HasColumnName("fotourl");

                entity.Property(d => d.Status)
                    .IsRequired()
                    .HasColumnName("status");

                entity.Property(d => d.DataCriacao)
                    .IsRequired()
                    .HasColumnName("datacriacao");

                entity.Property(d => d.UsuarioId)
                    .HasColumnName("usuarioid");

                entity.HasOne(d => d.Usuario)
                      .WithMany(u => u.Denuncias)
                      .HasForeignKey(d => d.UsuarioId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
