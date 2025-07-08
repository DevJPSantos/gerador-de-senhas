# 🔐 Gerador de Senhas Seguras

Uma aplicação de terminal simples para gerar senhas aleatórias e seguras, desenvolvida com Node.js. O usuário escolhe o tamanho da senha e se deseja incluir números e símbolos.

## ✨ Funcionalidades

* **Escolha do Tamanho:** Defina quantos caracteres a senha deve ter.
* **Incluir Números:** Opção de adicionar dígitos numéricos.
* **Incluir Símbolos:** Opção de incluir caracteres especiais.
* **Interface CLI Interativa:** Menu de perguntas via terminal.
* **Código Modularizado:** Separação entre lógica de geração e execução.
* **Executável como Comando Global:** Pode ser executado com `gerar-senha` após o `npm link`.

## 🚀 Como Usar

1. **Clone o repositório:**
 
   git clone https://github.com/DevJPSantos/gerador-de-senhas.git

2. **Navegue até a pasta do projeto:**
´´´
    cd gerador-de-senhas
´´´
3. **Instale as dependências**
´´´
    npm install
´´´
4. **(Opcional) Crie um comando global:**
´´´
    npm link
´´´
5. **Execute a aplicação**

* **Se usou npm link:**
´´´
    gerar-senha
´´´
* **Ou diretamente:**
´´´
    node index.js
´´´
## 🛠️ Estrutura do Projeto

´´´
gerador-de-senhas/
├── src/
│   └── gerador.js         # Função de geração da senha
├── index.js               # Entrada principal da aplicação
├── package.json           # Configuração do projeto e dependências
├── .gitignore             # Ignora node_modules
└── README.md              # Documentação do projeto
´´´

## ⚙️ Tecnologias Utilizadas

**Node.js:** Ambiente de execução.

**Inquirer:** Interface de perguntas no terminal.

**Chalk:** Cores e destaques no terminal.

**ES Modules:** Organização moderna com import/export.

## 🤝 Colaboração
Contribuições são bem-vindas! Se você tiver ideias, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença
Este projeto está licenciado sob a Licença MIT.

## 📞 Contato
João Pedro Lima Santos – DevJPSantos