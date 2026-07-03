# **🌟 Portfólio do Dodô**

Esse é o portfólio do Dodô! 🎨✨  
Aqui você encontra alguns dos projetos que eu já fiz, e também um guia super útil para o **Dodô do futuro** (que vai esquecer quase tudo 😅).

Se você é o Dodô do futuro e está lendo isso, não se preocupe! Vou te guiar passo a passo para adicionar novos projetos ao portfólio. Vamos nessa! 🚀

---

## **📚 Guia para Adicionar Novos Projetos**

### **1. Adicionar o Novo Projeto como Submodule**

Primeiro, você precisa adicionar o novo projeto como um **submodule** Git. Isso mantém o projeto separado, mas ainda integrado ao portfólio.

#### Comando:

```bash
git submodule add https://github.com/dodocinho/novo-projeto.git src/projects/novo-projeto
```

O que isso faz?

- Adiciona o repositório do novo projeto na pasta `src/projects/novo-projeto`.
- Mantém o projeto independente, mas vinculado ao portfólio.

### **2. Atualizar o Script update-projects.sh**

O script `update-projects.sh` é mágico! Ele faz o build de todos os projetos e corrige os caminhos no `index.html`. Você precisa adicionar o novo projeto à lista de submodules no script.

Edite o arquivo `update-projects.sh`:
Localize a lista `SUBMODULES` e adicione o caminho do novo projeto:

```bash
SUBMODULES=(
  "src/projects/shaderslab"
  "src/projects/outro-projeto"
  "src/projects/novo-projeto"  # 👈 Adicione o novo projeto aqui
)
```

O que isso faz?

- O script agora incluirá o novo projeto no processo de build e correção de caminhos.

### **3. Executar o Script update-projects.sh**

Agora que o novo projeto foi adicionado, é hora de executar o script para fazer o build e integrar o projeto ao portfólio.

Comando:

```bash
./update-projects.sh
```

O que isso faz?

- Atualiza todos os submodules.
- Faz o build de cada projeto.
- Copia os builds para a pasta `public/projects`.
- Corrige os caminhos no `index.html` de cada projeto.

### **4. Adicionar uma Rota para o Novo Projeto**

Para que o novo projeto seja acessível no portfólio, você precisa adicionar uma rota no arquivo de rotas do projeto principal.

Edite o arquivo `src/routes.js`:
Adicione uma nova rota para o projeto:

```javascript
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/shaderslab"
        component={() => {
          window.location.href = "/projects/shaderslab/index.html";
          return null;
        }}
      />
      <Route
        path="/novo-projeto" // 👈 Adicione a nova rota aqui
        component={() => {
          window.location.href = "/projects/novo-projeto/index.html";
          return null;
        }}
      />
    </Switch>
  </Router>
);
```

O que isso faz?

- Cria uma rota para o novo projeto, redirecionando para o build estático.

### **5. Testar Localmente**

Antes de publicar, teste localmente para garantir que tudo está funcionando.

Comando:

```bash
npm start
```

O que verificar?

- Acesse http://localhost:3000/novo-projeto e confira se o projeto carrega corretamente.

### **6. Publicar no GitHub Pages**

Se tudo estiver funcionando, é hora de fazer o commit e o push para o repositório.

Comando:

```bash
git commit -m "Adicionado novo-projeto como submodule"
git push
```

O que isso faz?

- Faz o commit e o push para o repositório.
- O próprio GitHub Pages vai se atualizar automaticamente.

## **🚀 Fluxo Oficial de Publicação (somente site principal)**

Atualmente, o deploy oficial acontece **apenas** no repositório principal do portfólio.

- Repositório principal (`dodocinho.github.io`): publica automaticamente no GitHub Pages.
- Submodules (ex.: `shaderslab`): **não publicam** no GitHub Pages.

### Ordem recomendada de commits

1. Faça commit das mudanças do projeto dentro do submodule (código do projeto).
2. No repositório principal, atualize o ponteiro do submodule e commite.
3. Faça push no repositório principal para disparar o deploy oficial.

### Sequência de comandos

#### 1) Commit no submodule (mudanças de código)

```bash
cd src/projects/shaderslab
git add .
git commit -m "feat: atualiza shaderslab"
git push origin main
```

#### 2) Commit no repositório principal (ponteiro do submodule + ajustes)

```bash
cd ../../..
git add src/projects/shaderslab .github/workflows/main.yml README.md
git commit -m "ci/docs: publica somente no sigte oficial"
git push origin main
```

### Teste local antes do push

```bash
./update-projects.sh
npm run build
npm run preview
```

Depois acesse:

- `http://localhost:4173/`
- `http://localhost:4173/shaderslab`

## 🌟 Dicas e Boas Práticas

- Mantenha os submodules atualizados: Sempre que você atualizar um projeto, execute `git submodule update --remote` para puxar as mudanças mais recentes.

## 🚨 Solução de Problemas Comuns

### Projeto não carrega no GitHub Pages

- Verifique se os caminhos no index.html estão corretos (o script já faz isso automaticamente).

- Confira se o build foi copiado para a pasta `public/projects`.

### Erros de dependência no submodule

- Certifique-se de que cada submodule tem suas próprias dependências instaladas (npm install dentro do submodule).

### Rotas quebradas

- Confira se a rota no src/routes.js está correta e apontando para o caminho certo.

## 🎉 Pronto, Dodô do Futuro!

Agora você sabe como adicionar novos projetos ao seu portfólio de forma simples e organizada.
Se precisar de ajuda, consulte este guia ou abra uma issue no repositório.
Divirta-se construindo seu portfólio incrível! 🚀✨

Feito com ❤️ pelo Dodô do Passado
