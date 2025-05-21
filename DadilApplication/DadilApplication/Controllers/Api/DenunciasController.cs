using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Base.models;
using DadilApplication.DBContext;
using DadilApplication.Base.DTOs;
using Base.enums;
using Microsoft.AspNetCore.Authorization;

namespace DadilApplication.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class DenunciasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DenunciasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Denuncias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Denuncia>>> GetDenuncia()
        {
            return await _context.Denuncias
                .Include(d => d.Usuario)
                .ToListAsync();
        }

        // GET: api/Denuncias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Denuncia>> GetDenuncia(int id)
        {
            var denuncia = await _context.Denuncias
                .Include(d => d.Usuario)
                .FirstOrDefaultAsync(d => d.DenunciaId == id);

            return denuncia == null ? NotFound() : Ok(denuncia);
        }

        // POST: api/Denuncias
        [HttpPost]
        public async Task<ActionResult<Denuncia>> PostDenuncia(DenunciaRequest request)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.UsuarioId == request.UsuarioId);

            if (usuario == null)
                return BadRequest("Usuário informado não existe.");

            var denuncia = new Denuncia
            {
                Descricao = request.Descricao,
                Localizacao = request.Localizacao,
                FotoUrl = request.FotoUrl,
                Status = (StatusEnum)request.Status,
                DataCriacao = request.DataCriacao,
                Usuario = usuario,
                UsuarioId = request.UsuarioId
            };

            _context.Denuncias.Add(denuncia);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDenuncia), new { id = denuncia.DenunciaId }, denuncia);
        }

        // PUT: api/Denuncias/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDenuncia(int id, DenunciaRequest request)
        {
            var denuncia = await _context.Denuncias
                .Include(d => d.Usuario)
                .FirstOrDefaultAsync(d => d.DenunciaId == id);

            if (denuncia == null)
            {
                return NotFound();
            }

            denuncia.Descricao = request.Descricao;
            denuncia.Localizacao = request.Localizacao;
            denuncia.FotoUrl = request.FotoUrl;
            denuncia.Status = (StatusEnum)request.Status;
            denuncia.DataCriacao = request.DataCriacao;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DenunciaExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Denuncias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDenuncia(int id)
        {
            var denuncia = await _context.Denuncias.FindAsync(id);
            if (denuncia == null) return NotFound();

            _context.Denuncias.Remove(denuncia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DenunciaExists(int id)
        {
            return _context.Denuncias.Any(e => e.DenunciaId == id);
        }
    }
}