using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DadilApplication.Migrations
{
    /// <inheritdoc />
    public partial class PopulaUsuario : Migration
    {
        protected override void Up(MigrationBuilder mb)
        {
            mb.Sql("INSERT INTO usuarios (nome, email, telefone, senha, datacadastro) " +
                   "VALUES ('Igor', 'igor@gmail.com', '85999999999', 'senha@123', CURRENT_TIMESTAMP)");

            mb.Sql("INSERT INTO usuarios (nome, email, telefone, senha, datacadastro) " +
                   "VALUES ('Lucas', 'lucas@gmail.com', '85999999999', 'senha@123', CURRENT_TIMESTAMP)");
        }

        protected override void Down(MigrationBuilder mb)
        {
            mb.Sql("DELETE FROM usuarios");
        }
    }
}
