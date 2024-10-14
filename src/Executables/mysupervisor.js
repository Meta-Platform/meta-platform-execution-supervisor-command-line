#!/usr/bin/env node

const process     = require("process")
const { resolve } = require("path")
const yargs       = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")

require("dotenv").config({path: resolve(__dirname, "../..", ".env")})

const ListSocketsCommand                  = require(`../Commands/ListSockets.command`)
const GetExecutionStatusCommand           = require(`../Commands/GetExecutionStatus.command`)
const ListRunningTasksCommand             = require(`../Commands/ListRunningTasks.command`)
const ShowExecutionTaskInformationCommand = require(`../Commands/ShowExecutionTaskInformation.command`)
const LogExecutionCommand                 = require(`../Commands/LogExecution.command`)
const KillExecutionCommand                = require(`../Commands/KillExecution.command`)

const { argv } = yargs(hideBin(process.argv))
    .command('sockets', "Listar todos os sockets de supervisão", {}, ListSocketsCommand)
    .command('status', 'Mostrar status do execução do pacote', (yargs) => {
        yargs.option('socket', {
            describe: 'Nome do socket do daemon',
            type: 'string',
            demandOption: true,
        })
    }, ({socket}) => GetExecutionStatusCommand({socket}))
    .command('tasks', 'Listar tarefas carregadas no task executor do daemon', (yargs) => {
        yargs.option('socket', {
            describe: 'Nome do socket do daemon',
            type: 'string',
            demandOption: true,
        })
    }, ({socket}) => ListRunningTasksCommand({socket}))
    .command('show', "Mostra informações sobre elementos do daemon", (yargs) => {
        yargs
        .command('task [taskId]', 'Mostra informação sobre uma tarefa específica do daemon',  (yargs) => {
            yargs.positional('taskId', {
                describe: 'Id da tarefa',
                type: 'number',
            })
            yargs.option('socket', {
                describe: 'Nome do socket do daemon',
                type: 'string',
                demandOption: true,
            })
        }, ({taskId, socket}) => ShowExecutionTaskInformationCommand({taskId, socket}))
    })
    .command('log', "Visualizar log da daemon", (yargs) => {
        yargs.option('socket', {
            describe: 'Nome do socket do daemon',
            type: 'string',
            demandOption: true,
        })
    }, ({socket}) => LogExecutionCommand({socket}))
    .command('kill', 'Matar o daemon', (yargs) => {
        yargs.option('socket', {
            describe: 'Nome do socket do daemon',
            type: 'string',
            demandOption: true,
        })
    }, ({socket}) => KillExecutionCommand({socket}))
