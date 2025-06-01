# DADIL - Denúncias Anônimas para Descarte Irregular de Lixo

DADIL é um sistema web completo para registrar e acompanhar denúncias anônimas sobre descarte irregular de lixo. O objetivo principal é promover a cidadania ativa, permitindo que qualquer pessoa contribua para a melhoria do ambiente urbano de forma simples e segura.

## Disciplina N708-Proj aplic multiplataf etapa 2
- Igor Souza Cruz (Matrícula: 2325198) 
- Lucas Araújo de Almeida (Matrícula: 2325769)

## ✨ Funcionalidades

- Cadastro e visualização de denúncias anônimas
- Envio de fotos e localização do incidente
- Acompanhamento do status da denúncia
- Interface moderna e responsiva
- Backend com autenticação e API RESTful
- Deploy via Docker com banco de dados persistente

## 🧰 Tecnologias Utilizadas

### Backend

- ASP.NET Core 8
- Entity Framework Core
- PostgreSQL (via Npgsql)
- Swashbuckle (Swagger)
- Identity para autenticação

### Frontend

- Angular 17+
- TypeScript
- Tailwind CSS
- SCSS

### Infraestrutura

- Docker & Docker Compose
- GitHub + Git para versionamento
- User Secrets (armazenamento seguro de senhas em dev)

## 🔧 Ferramentas de Desenvolvimento

- .NET SDK 8.0
- PostgreSQL (v13+)
- Visual Studio 2022 ou VS Code com extensão C#
- CLI do EF Core (para migrações)
- Node.js + Angular CLI

## 🧪 Executando Migrações

```bash
cd DadilApplication
dotnet ef migrations add Inicial
dotnet ef database update
```

## 📁 Estrutura do Projeto

```
dadil/
├── DadilApplication/          # Backend ASP.NET Core
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Migrations/
│   └── Program.cs, appsettings.json etc.
├── FrontDadil/                # Frontend Angular
│   ├── src/
│   ├── angular.json
│   └── package.json
├── docker-compose.yml         # Orquestração de containers
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/igorsouzaccruz/dadil.git
cd dadil
```

### 2. Executar via Docker (Recomendado)

```bash
docker-compose up --build
```

### 3. Ao subir portas ocupadas
> - Backend em ASP.NET Core na porta `5000`
> - Frontend Angular na porta `4200`
> - PostgreSQL na porta `5432`

Acesse:
- 🔗 Frontend: [http://localhost:4200](http://localhost:4200)
- 🔗 API (Swagger): [http://localhost:5000/swagger](http://localhost:5000/swagger)

## 🛠️ Execução Manual (Sem Docker)

### Backend

```bash
cd DadilApplication
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd FrontDadil
npm install
ng serve
```


## ▶️ Passo a Passo para Execução

1. **Subir o banco de dados com Docker Compose**:

```bash
docker-compose up -d
```

2. **Rodar o backend (ASP.NET Core) no Visual Studio ou terminal**:

- Se estiver usando o Visual Studio, selecione o perfil **IIS Express** e pressione `F5` ou `Ctrl+F5`.
- Se estiver usando terminal:

```bash
cd DadilApplication
dotnet restore
dotnet ef database update
dotnet run
```

3. **Rodar o frontend (Angular)**:

```bash
cd FrontDadil
npm install
npx ng serve
```

Acesse:
- 🔗 Frontend: [http://localhost:4200](http://localhost:4200)
- 🔗 API: [http://localhost:5000/swagger](http://localhost:5000/swagger)


## 🔐 Credenciais de Acesso

Usuário inicial pode ser criado via seed no projeto ou adicionado diretamente no banco de dados PostgreSQL.

## ✅ Status do Projeto

📌 Projeto em desenvolvimento ativo com potencial de evolução para incluir:
- Mapa de denúncias
- Dashboard de indicadores
- Moderação/administração de denúncias

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças importantes, por favor abra uma issue primeiro para discutir o que deseja modificar.
