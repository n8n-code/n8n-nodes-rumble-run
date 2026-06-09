import type { INodeProperties } from 'n8n-workflow';

export const serviceNowDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Now"
					]
				}
			},
			"options": [
				{
					"name": "Snow Export Assets CSV",
					"value": "Snow Export Assets CSV",
					"action": "Export an asset inventory as CSV for ServiceNow integration",
					"description": "Export an asset inventory as CSV for ServiceNow integration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.servicenow.csv"
						}
					}
				},
				{
					"name": "Snow Export Assets JSON",
					"value": "Snow Export Assets JSON",
					"action": "Exports the asset inventory as JSON",
					"description": "Exports the asset inventory as JSON",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.servicenow.json"
						}
					}
				},
				{
					"name": "Snow Export Services CSV",
					"value": "Snow Export Services CSV",
					"action": "Export a service inventory as CSV for ServiceNow integration",
					"description": "Export a service inventory as CSV for ServiceNow integration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/services.servicenow.csv"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /export/org/assets.servicenow.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Now"
					],
					"operation": [
						"Snow Export Assets CSV"
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
						"Service Now"
					],
					"operation": [
						"Snow Export Assets CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/assets.servicenow.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Now"
					],
					"operation": [
						"Snow Export Assets JSON"
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
						"Service Now"
					],
					"operation": [
						"Snow Export Assets JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/services.servicenow.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Now"
					],
					"operation": [
						"Snow Export Services CSV"
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
						"Service Now"
					],
					"operation": [
						"Snow Export Services CSV"
					]
				}
			}
		},
];
