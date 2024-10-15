# Meta Platform Execution Supervisor

Este aplicativo é utilizado para análise e supervisão de aplicações compatíveis com o Ecossistema Meta Platform, ou seja, aplicações que são executadas pelo *package-executor*. As aplicações controladas por ele podem expor um socket de comunicação, permitindo que o supervisor interaja diretamente com a aplicação em execução.

## Como usar a release do projeto

Para começar a usar o Daemon Management Command-line do Meta Platform no seu sistema, siga os passos abaixo:

1. Abra o terminal.
2. Execute os comandos a seguir para instalar a ferramenta e configurar os links simbólicos necessários:

```bash
npm install
npm link
```

Após a instalação, você será capaz de acessar os comandos do ***Execution Supervisor*** em qualquer lugar no seu sistema.

## Gerenciamento de ums instância do package-executor

A ferramenta oferece uma série de comandos para gerenciar diversos aspectos da aplicação. Abaixo, você encontrará uma descrição detalhada de cada comando e exemplos de uso.

### Listar sockets
Lista todos os sockets de todas as instâncias em execução
```bash
mysupervisor sockets
```

### Mostrar status
 Mostra status de um instância em execução
```bash
mysupervisor status --socket "<SOCKET_FILENAME>"
```

### Listar tarefas
Lista todas as tarefas de um instância em execução
```bash
mysupervisor tasks --socket "<SOCKET_FILENAME>"
```

### Visualizar logs
Fica exibindo o logs de uma instância em execução
```bash
mysupervisor log --socket "<SOCKET_FILENAME>"
```

### Matar Execução
Mata a execução de uma instância.
```bash
mysupervisor kill --socket "<SOCKET_FILENAME>"
```

### Detalhar informações de tarefas
Mostra informações detalhada de uma tarefas específica
```bash
# Obter Informações sobre uma Tarefa Específica do Daemon  
mysupervisor show task "<TASK_ID>" --socket "<SOCKET_FILENAME>"
```