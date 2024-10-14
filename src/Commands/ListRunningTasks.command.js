const SetupCLIScriptLoader = require("meta-platform-cli-script-loader-library/SetupCLIScriptLoader")

const NPM_DEPENDENCIES =  require("../Configs/npm-dependencies.json")
const META_PLATFORM_DEPENDENCIES = require("../Configs/meta-platform-dependencies.json")

const ListRunningTasksCommand = async ({socket}) => {  

    const LoaderScript = await SetupCLIScriptLoader({
		npmDependencies: NPM_DEPENDENCIES,
		metaPlatformDependencies: META_PLATFORM_DEPENDENCIES
	})
    
	const CreateCommunicationInterface = LoaderScript("supervisor.lib/src/CreateCommunicationInterface")

    const MountTaskTable = LoaderScript("supervisor.lib/src/MountTaskTable")

    const daemonClient = await CreateCommunicationInterface(socket)
    const taskList = await daemonClient.ListTasks()
    const table = await MountTaskTable(taskList, LoaderScript)
    console.log(table.toString())
}

module.exports = ListRunningTasksCommand