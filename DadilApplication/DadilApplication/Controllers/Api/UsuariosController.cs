using DadilApplication.DTOs;
using DadilApplication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DadilApplication.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger<UsuariosController> _logger;

        public UsuariosController(UserManager<ApplicationUser> userManager, ILogger<UsuariosController> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }

        // GET: api/Usuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioResponse>>> BuscarUsuariosAsync()
        {
            var users = await _userManager.GetUsersInRoleAsync("user");
            if (users is null)
            {
                _logger.LogInformation(2, "Error");
                return StatusCode(StatusCodes.Status400BadRequest,
                 new Response
                 {
                     Status = "Error",
                     Message = $"Unable to get users!"
                 });
            }

            var result = users.Select(u => new UsuarioResponse(
                UsuarioId: u.Id,
                Nome: u.UserName ?? string.Empty,
                Email: u.Email ?? string.Empty,
                Telefone: u.PhoneNumber ?? string.Empty,
                DataCadastro: u.DataCadastro
                ));

            return Ok(result);
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioResponse>> GetUsuario(string id)
        {
            var usuario = await _userManager.FindByIdAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            var result = new UsuarioResponse(
            UsuarioId: usuario.Id,
            Nome: usuario.UserName ?? string.Empty,
            Email: usuario.Email ?? string.Empty,
            Telefone: usuario.PhoneNumber ?? string.Empty,
            DataCadastro: usuario.DataCadastro
            );

            return result;
        }

        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(string id, UsuarioResponse usuario)
        {
            if (id != usuario.UsuarioId)
            {
                return BadRequest();
            }

            var usuarioExistente = await _userManager.FindByIdAsync(id);

            if (usuarioExistente is null)
            {
                return NotFound();
            }
            usuarioExistente.UserName = usuario.Nome;
            usuarioExistente.Email = usuario.Email;
            usuarioExistente.PhoneNumber = usuario.Telefone;

            var resultado = await _userManager.UpdateAsync(usuarioExistente);
            if (!resultado.Succeeded)
            {
                return BadRequest(new
                {
                    Status = "Error",
                    Erros = resultado.Errors.Select(e => e.Description)
                });
            }

            return NoContent();
        }

        private async Task<bool> UsuarioExists(string id)
        {
            return await _userManager.FindByIdAsync(id) is not null;
        }
    }
}
