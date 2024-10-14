const SetupCLIScriptLoader = require("meta-platform-cli-script-loader-library/SetupCLIScriptLoader")

const NPM_DEPENDENCIES =  require("../Configs/npm-dependencies.json")
const META_PLATFORM_DEPENDENCIES = require("../Configs/meta-platform-dependencies.json")

const ListSocketsCommand = async () => {
    
    const LoaderScript = await SetupCLIScriptLoader({
		npmDependencies: NPM_DEPENDENCIES,
		metaPlatformDependencies: META_PLATFORM_DEPENDENCIES
	})

	const ListSocketFilesName = LoaderScript("supervisor.lib/src/ListSocketFilesName")

    const socketFileNameList = await ListSocketFilesName(process.env.SUPERVISOR_SOCKETS_DIRPATH)

    if (socketFileNameList.length === 0) {
        console.log("Nenhum arquivo de socket encontrado.")
    } else {
        console.log("Listagem de arquivos de socket:")
        socketFileNameList.forEach((socketFileName) => {
            console.log(`- ${socketFileName}`)
        })
    }
}

module.exports = ListSocketsCommand
