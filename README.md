# Execution Supervisor Command-line

Esse aplicativo é usado para analise e supervição de aplicações compátiveis com o Ecosistema Meta Plaform ou seja aplicações executando com o package-executor, as aplicações executadas com ele pode expor o um socket onde o supervisor consegue se comunicar com a aplicação em execução

## Configuração do projeto

Para começar a usar o Daemon Management Command-line do Meta Platform no seu sistema, siga os passos abaixo:

1. Abra o terminal.
2. Execute os comandos a seguir para instalar a ferramenta e configurar os links simbólicos necessários:

```bash
npm install
npm link
```

Após a instalação, você será capaz de acessar os comandos do ***Execution Supervisor*** em qualquer lugar no seu sistema.

## Comandos Disponíveis

A ferramenta oferece uma série de comandos para gerenciar diversos aspectos da aplicação. Abaixo, você encontrará uma descrição detalhada de cada comando e exemplos de uso.
`FALTA O EXEMPLO DE USO`

### Gerenciamento de um instancia do package-executor

```bash
# listar todos os sockets
mysupervisor sockets

# Mostrar status do execução do pacote
mysupervisor status --socket [SOCKET_FILENAME]

# Listar Tarefas no Task Executor do Daemon**
mysupervisor tasks --socket [SOCKET_FILENAME]

# Visualiza o log do daemon
mysupervisor log --socket [SOCKET_FILENAME]

# Interromper o Daemon do Ecossistema
mysupervisor kill --socket [SOCKET_FILENAME]

# Obter Informações sobre uma Tarefa Específica do Daemon  
mysupervisor show task [TASK_ID] --socket [SOCKET_FILENAME]
```