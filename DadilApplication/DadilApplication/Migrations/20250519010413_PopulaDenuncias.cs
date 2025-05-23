using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DadilApplication.Migrations
{
    /// <inheritdoc />
    public partial class PopulaDenuncias : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder mb)
        {
            mb.Sql("INSERT INTO denuncias (descricao, localizacao, fotourl, status, datacriacao,usuarioid) " +
                   "VALUES ('Lixo em lugar errado', 'Rua X Bairro Y Numero 10', 'https://www.google.com/?hl=pt-BR', 1, CURRENT_TIMESTAMP, 1)");

            mb.Sql("INSERT INTO denuncias (descricao, localizacao, fotourl, status, datacriacao,usuarioid) " +
                  "VALUES ('Lixo 2 em lugar errado', 'Rua X Bairro Y Numero 11', 'https://www.google.com/?hl=pt-BR', 1, CURRENT_TIMESTAMP, 1)");

            mb.Sql("INSERT INTO denuncias (descricao, localizacao, fotourl, status, datacriacao,usuarioid) " +
                  "VALUES ('Lixo 3 em lugar errado', 'Rua X Bairro Y Numero 12', 'https://www.google.com/?hl=pt-BR', 1, CURRENT_TIMESTAMP, 1)");


            mb.Sql("INSERT INTO denuncias (descricao, localizacao, fotourl, status, datacriacao,usuarioid) " +
                  "VALUES ('Lixo 4 em lugar errado', 'Rua X Bairro Y Numero 12', 'https://www.google.com/?hl=pt-BR', 1, CURRENT_TIMESTAMP, 2)");


            mb.Sql("INSERT INTO denuncias (descricao, localizacao, fotourl, status, datacriacao,usuarioid) " +
                  "VALUES ('Lixo 5 em lugar errado', 'Rua X Bairro Y Numero 12', 'https://www.google.com/?hl=pt-BR', 1, CURRENT_TIMESTAMP, 2)");
        }


        protected override void Down(MigrationBuilder mb)
        {
            mb.Sql("DELETE FROM denuncias");
        }
    }
}
