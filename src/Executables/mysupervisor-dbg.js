#!/usr/bin/env node
const {resolve} = require("path")

const ExecuteDebugMode = require("meta-platform-cli-script-loader-library/src/ExecuteDebugMode")

const args = process.argv.slice(2)
const executablesDirPath = resolve(__dirname, "..", "Executables", "mysupervisor.js")
ExecuteDebugMode(executablesDirPath, args)