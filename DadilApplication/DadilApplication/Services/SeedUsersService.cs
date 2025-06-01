using DadilApplication.DBContext;
using DadilApplication.Enums;
using DadilApplication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DadilApplication.Services
{
    public class SeedUsersService : IHostedService
    {
        private readonly IServiceProvider _serviceProvider;

        public SeedUsersService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            using var scope = _serviceProvider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();


            var roleNameAdmin = "Admin";
  
            if (!await roleManager.RoleExistsAsync(roleNameAdmin))
            {
                await roleManager.CreateAsync(new IdentityRole(roleNameAdmin));
            }
            var roleNameUser = "User";

            if (!await roleManager.RoleExistsAsync(roleNameUser))
            {
                await roleManager.CreateAsync(new IdentityRole(roleNameUser));
            }


            await CriarUsuarioAsync(userManager, "admin", "Senha@123", "admin@email.com", "Admin");
            await CriarUsuarioAsync(userManager, "igor", "Senha@123", "igor@email.com", "User");
            await CriarUsuarioAsync(userManager, "lucas", "Senha@123", "lucas@email.com", "User");

            if (!await context.Denuncias!.AnyAsync())
            {
                var igor = await userManager.FindByNameAsync("igor");
                var lucas = await userManager.FindByNameAsync("lucas");

                var denuncias = new List<Denuncia>
                {
                    new() { Descricao = "Lixo acumulado na calçada", Localizacao = "Rua A, Bairro X", FotoUrl = "https://picsum.photos/200", Status = StatusEnum.Pendente, DataCriacao = DateTime.UtcNow, UsuarioId = igor.Id },
                    new() { Descricao = "Queima de lixo a céu aberto", Localizacao = "Av B, Bairro Y", FotoUrl = "https://picsum.photos/200/300", Status = StatusEnum.Pendente, DataCriacao = DateTime.UtcNow, UsuarioId = igor.Id },
                    new() { Descricao = "Descarte irregular em área verde", Localizacao = "Travessa C, Bairro Z", FotoUrl = "https://picsum.photos/400", Status = StatusEnum.EmAnalise, DataCriacao = DateTime.UtcNow, UsuarioId = lucas.Id },
                    new() { Descricao = "Entulho jogado em via pública", Localizacao = "Rua D, Centro", FotoUrl = "https://picsum.photos/500", Status = StatusEnum.EmAnalise, DataCriacao = DateTime.UtcNow, UsuarioId = lucas.Id },
                    new() { Descricao = "Descaso com a população de Caucaia", Localizacao = "Rua D, Caucaia", FotoUrl = "https://picsum.photos/500", Status = StatusEnum.Resolvido, DataCriacao = DateTime.UtcNow, UsuarioId = lucas.Id },
                    new() { Descricao = "Acúmulo de lixo em terreno baldio", Localizacao = "Rua E, Bairro Q", FotoUrl = "https://picsum.photos/600", Status = StatusEnum.Pendente, DataCriacao = DateTime.UtcNow, UsuarioId = igor.Id },
                };

                context.Denuncias!.AddRange(denuncias);
                await context.SaveChangesAsync();
            }
        }



        private async Task CriarUsuarioAsync(UserManager<ApplicationUser> userManager, string nomeUsuario, string senha, string email, string? role)
        {
            var existente = await userManager.FindByNameAsync(nomeUsuario);
            if (existente != null) return;

            var novoUsuario = new ApplicationUser
            {
                UserName = nomeUsuario,
                Email = email,
                DataCadastro = DateTime.UtcNow,
                EmailConfirmed = true
            };

            var resultado = await userManager.CreateAsync(novoUsuario, senha);

            if (resultado.Succeeded && role != null)
            {
                await userManager.AddToRoleAsync(novoUsuario, role);
            }
        }

        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
    }
}
