import type { INodeProperties } from 'n8n-workflow';

export const publicDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					]
				}
			},
			"options": [
				{
					"name": "Get Latest Agent Version",
					"value": "Get Latest Agent Version",
					"action": "Returns latest agent version",
					"description": "Returns latest agent version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/releases/agent/version"
						}
					}
				},
				{
					"name": "Get Latest Platform Version",
					"value": "Get Latest Platform Version",
					"action": "Returns latest platform version",
					"description": "Returns latest platform version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/releases/platform/version"
						}
					}
				},
				{
					"name": "Get Latest Scanner Version",
					"value": "Get Latest Scanner Version",
					"action": "Returns latest scanner version",
					"description": "Returns latest scanner version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/releases/scanner/version"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /releases/agent/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Latest Agent Version"
					]
				}
			}
		},
		{
			"displayName": "GET /releases/platform/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Latest Platform Version"
					]
				}
			}
		},
		{
			"displayName": "GET /releases/scanner/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public"
					],
					"operation": [
						"Get Latest Scanner Version"
					]
				}
			}
		},
];
