import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { ciscoSntcDescription } from './resources/cisco-sntc';
import { exportDescription } from './resources/export';
import { serviceNowDescription } from './resources/service-now';
import { splunkDescription } from './resources/splunk';
import { organizationDescription } from './resources/organization';
import { publicDescription } from './resources/public';

export class RumbleRun implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'rumble-run',
		name: 'N8nDevRumbleRun',
		icon: { light: 'file:./rumble-run.svg', dark: 'file:./rumble-run.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Rumble Network Discovery is now runZero. Read the announcement. This API is frozen and no longer being update..',
		defaults: { name: 'rumble-run' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevRumbleRunApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				},
				{
					"name": "Cisco SNTC",
					"value": "Cisco SNTC",
					"description": ""
				},
				{
					"name": "Export",
					"value": "Export",
					"description": "Requires Export Token or Organization Key"
				},
				{
					"name": "Service Now",
					"value": "Service Now",
					"description": ""
				},
				{
					"name": "Splunk",
					"value": "Splunk",
					"description": ""
				},
				{
					"name": "Organization",
					"value": "Organization",
					"description": "Requires Organization Key"
				},
				{
					"name": "Public",
					"value": "Public",
					"description": "Unauthenticated"
				}
			],
			"default": ""
		},
		...accountDescription,
		...ciscoSntcDescription,
		...exportDescription,
		...serviceNowDescription,
		...splunkDescription,
		...organizationDescription,
		...publicDescription
		],
	};
}
