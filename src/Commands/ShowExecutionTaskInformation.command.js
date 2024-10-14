const SetupCLIScriptLoader = require("meta-platform-cli-script-loader-library/SetupCLIScriptLoader")

const NPM_DEPENDENCIES =  require("../Configs/npm-dependencies.json")
const META_PLATFORM_DEPENDENCIES = require("../Configs/meta-platform-dependencies.json")

const ShowExecutionTaskInformationCommand = async ({taskId, socket}) => {

	const LoaderScript = await SetupCLIScriptLoader({
		npmDependencies: NPM_DEPENDENCIES,
		metaPlatformDependencies: META_PLATFORM_DEPENDENCIES
	})

	const CreateCommunicationInterface      = LoaderScript("supervisor.lib/src/CreateCommunicationInterface")
    const RenderGeneralInformationTaskTable = LoaderScript("supervisor.lib/src/RenderGeneralInformationTaskTable")
    const RenderStaticParametersTaskTable   = LoaderScript("supervisor.lib/src/RenderStaticParametersTaskTable")
    const RenderLinkedParametersTaskTable   = LoaderScript("supervisor.lib/src/RenderLinkedParametersTaskTable")
    const RenderAgentLinkRulesTaskTable     = LoaderScript("supervisor.lib/src/RenderAgentLinkRulesTaskTable")
    const RenderActivationRulesTaskTable    = LoaderScript("supervisor.lib/src/RenderActivationRulesTaskTable")

    const daemonClient = await CreateCommunicationInterface(socket)
    const task = await daemonClient.GetTask(taskId)
    await RenderGeneralInformationTaskTable(task)
    await RenderStaticParametersTaskTable(task.staticParameters)

    task.linkedParameters
        && await RenderLinkedParametersTaskTable(task.linkedParameters)

    task.agentLinkRules && task.agentLinkRules.length > 0
        && await RenderAgentLinkRulesTaskTable(task.agentLinkRules)

    task.activationRules 
        && await RenderActivationRulesTaskTable(task.activationRules)
}

module.exports = ShowExecutionTaskInformationCommand