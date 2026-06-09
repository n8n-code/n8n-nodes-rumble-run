import type { INodeProperties } from 'n8n-workflow';

export const ciscoSntcDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cisco SNTC"
					]
				}
			},
			"options": [
				{
					"name": "Export Assets Cisco CSV",
					"value": "Export Assets Cisco CSV",
					"action": "Cisco serial number and model name export for Cisco Smart Net Total Care Service.",
					"description": "Cisco serial number and model name export for Cisco Smart Net Total Care Service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.cisco.csv"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /export/org/assets.cisco.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cisco SNTC"
					],
					"operation": [
						"Export Assets Cisco CSV"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "an optional search string for filtering results",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cisco SNTC"
					],
					"operation": [
						"Export Assets Cisco CSV"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cisco SNTC"
					],
					"operation": [
						"Export Assets Cisco CSV"
					]
				}
			}
		},
];
