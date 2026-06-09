import type { INodeProperties } from 'n8n-workflow';

export const splunkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					]
				}
			},
			"options": [
				{
					"name": "Splunk Asset Sync Created JSON",
					"value": "Splunk Asset Sync Created JSON",
					"action": "Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.",
					"description": "Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets/sync/created/assets.json"
						}
					}
				},
				{
					"name": "Splunk Asset Sync Updated JSON",
					"value": "Splunk Asset Sync Updated JSON",
					"action": "Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.",
					"description": "Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets/sync/updated/assets.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /export/org/assets/sync/created/assets.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Created JSON"
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
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Created JSON"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "an optional list of fields to export, comma-separated",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Created JSON"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "an optional unix timestamp to use as a checkpoint",
			"default": 1576300370,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Created JSON"
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
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Created JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/assets/sync/updated/assets.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Updated JSON"
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
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Updated JSON"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "an optional list of fields to export, comma-separated",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Updated JSON"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "an optional unix timestamp to use as a checkpoint",
			"default": 1576300370,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Updated JSON"
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
						"Splunk"
					],
					"operation": [
						"Splunk Asset Sync Updated JSON"
					]
				}
			}
		},
];
