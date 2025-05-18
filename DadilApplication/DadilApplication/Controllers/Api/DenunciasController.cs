using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Base.models;
using DadilApplication.DBContext;

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
            return await _context.Denuncias.ToListAsync();
        }

        // GET: api/Denuncias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Denuncia>> GetDenuncia(int id)
        {
            var denuncia = await _context.Denuncias.FindAsync(id);

            if (denuncia == null)
            {
                return NotFound();
            }

            return denuncia;
        }

        // PUT: api/Denuncias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDenuncia(int id, Denuncia denuncia)
        {
            if (id != denuncia.Id)
            {
                return BadRequest();
            }

            _context.Entry(denuncia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DenunciaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Denuncias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Denuncia>> PostDenuncia(Denuncia denuncia)
        {
            _context.Denuncias.Add(denuncia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDenuncia", new { id = denuncia.Id }, denuncia);
        }

        // DELETE: api/Denuncias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDenuncia(int id)
        {
            var denuncia = await _context.Denuncias.FindAsync(id);
            if (denuncia == null)
            {
                return NotFound();
            }

            _context.Denuncias.Remove(denuncia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DenunciaExists(int id)
        {
            return _context.Denuncias.Any(e => e.Id == id);
        }
    }
}
