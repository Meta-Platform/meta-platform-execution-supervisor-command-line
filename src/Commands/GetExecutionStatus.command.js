const SetupCLIScriptLoader = require("meta-platform-cli-script-loader-library/SetupCLIScriptLoader")

const NPM_DEPENDENCIES =  require("../Configs/npm-dependencies.json")
const META_PLATFORM_DEPENDENCIES = require("../Configs/meta-platform-dependencies.json")

const GetExecutionStatusCommand = async ({socket}) => {

	const LoaderScript = await SetupCLIScriptLoader({
		npmDependencies: NPM_DEPENDENCIES,
		metaPlatformmetaPlatformDependencies: META_PLATFORM_DEPENDENCIES
	})

	const CreateCommunicationInterface = LoaderScript("supervisor.lib/src/CreateCommunicationInterface")

	try{
		const client = await CreateCommunicationInterface(socket)
		const executionStatus = await client.GetStatus()
		console.log(`Status da execução [${executionStatus}]`)
	}catch(e){
		console.log(e)
		console.log(`O pacote não esta em execução`)
	}
}

module.exports = GetExecutionStatusCommand