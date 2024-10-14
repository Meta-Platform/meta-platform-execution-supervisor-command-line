const EventEmitter = require('events')

const SetupCLIScriptLoader = require("meta-platform-cli-script-loader-library/SetupCLIScriptLoader")

const NPM_DEPENDENCIES =  require("../Configs/npm-dependencies.json")
const META_PLATFORM_DEPENDENCIES = require("../Configs/meta-platform-dependencies.json")

const KillExecutionCommand = async ({socket}) => {

	const LoaderScript = await SetupCLIScriptLoader({
		npmDependencies: NPM_DEPENDENCIES,
		metaPlatformDependencies: META_PLATFORM_DEPENDENCIES
	})

    const CreateCommunicationInterface = LoaderScript("supervisor.lib/src/CreateCommunicationInterface")
    const FormatterDataLog             = LoaderScript("supervisor.lib/src/FormatterDataLog")

	const loggerEmitter = new EventEmitter()
	loggerEmitter.on("log", async (dataLog) => 
		console.log(await FormatterDataLog(dataLog)))

	try {
		const daemonClient = await CreateCommunicationInterface(socket)
		daemonClient.Kill()
		loggerEmitter 
            && loggerEmitter.emit("log", {sourceName: "execution-supervisor", type:"info", message: `Ecosystem Daemon foi terminado!`})
	} catch(e){
		if(e.syscall === "connect"){
			loggerEmitter 
            && loggerEmitter.emit("log", {sourceName: "execution-supervisor", type:"error", message: "O Ecosystem Daemon ja estava inativo!"})
		} else {
			loggerEmitter 
            && loggerEmitter.emit("log", {sourceName: "execution-supervisor", type:"error", message: e})
		}
	}
}

module.exports = KillExecutionCommand