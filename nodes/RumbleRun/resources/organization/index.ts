import type { INodeProperties } from 'n8n-workflow';

export const organizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization",
					"value": "Get Organization",
					"action": "Get organization details",
					"description": "Get organization details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org"
						}
					}
				},
				{
					"name": "Update Organization",
					"value": "Update Organization",
					"action": "Update organization details",
					"description": "Update organization details",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org"
						}
					}
				},
				{
					"name": "Get Agents",
					"value": "Get Agents",
					"action": "Get all agents",
					"description": "Get all agents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/agents"
						}
					}
				},
				{
					"name": "Remove Agent",
					"value": "Remove Agent",
					"action": "Remove and uninstall an agent",
					"description": "Remove and uninstall an agent",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/agents/{{$parameter[\"agent_id\"]}}"
						}
					}
				},
				{
					"name": "Get Agent",
					"value": "Get Agent",
					"action": "Get details for a single agent",
					"description": "Get details for a single agent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/agents/{{$parameter[\"agent_id\"]}}"
						}
					}
				},
				{
					"name": "Update Agent Site",
					"value": "Update Agent Site",
					"action": "Update the site associated with agent",
					"description": "Update the site associated with agent",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/agents/{{$parameter[\"agent_id\"]}}"
						}
					}
				},
				{
					"name": "Upgrade Agent",
					"value": "Upgrade Agent",
					"action": "Force an agent to update and restart",
					"description": "Force an agent to update and restart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/org/agents/{{$parameter[\"agent_id\"]}}/update"
						}
					}
				},
				{
					"name": "Get Assets",
					"value": "Get Assets",
					"action": "Get all assets",
					"description": "Get all assets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets"
						}
					}
				},
				{
					"name": "Clear Bulk Asset Tags",
					"value": "Clear Bulk Asset Tags",
					"action": "Clear all tags across multiple assets based on a search query",
					"description": "Clear all tags across multiple assets based on a search query",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/org/assets/bulk/clearTags"
						}
					}
				},
				{
					"name": "Update Bulk Asset Tags",
					"value": "Update Bulk Asset Tags",
					"action": "Update tags across multiple assets based on a search query",
					"description": "Update tags across multiple assets based on a search query",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/assets/bulk/tags"
						}
					}
				},
				{
					"name": "Remove Asset",
					"value": "Remove Asset",
					"action": "Remove an asset",
					"description": "Remove an asset",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/assets/{{$parameter[\"asset_id\"]}}"
						}
					}
				},
				{
					"name": "Get Asset",
					"value": "Get Asset",
					"action": "Get asset details",
					"description": "Get asset details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets/{{$parameter[\"asset_id\"]}}"
						}
					}
				},
				{
					"name": "Update Asset Comments",
					"value": "Update Asset Comments",
					"action": "Update asset comments",
					"description": "Update asset comments",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/assets/{{$parameter[\"asset_id\"]}}/comments"
						}
					}
				},
				{
					"name": "Update Asset Tags",
					"value": "Update Asset Tags",
					"action": "Update asset tags",
					"description": "Update asset tags",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/assets/{{$parameter[\"asset_id\"]}}/tags"
						}
					}
				},
				{
					"name": "Remove Key",
					"value": "Remove Key",
					"action": "Remove the current API key",
					"description": "Remove the current API key",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/key"
						}
					}
				},
				{
					"name": "Get Key",
					"value": "Get Key",
					"action": "Get API key details",
					"description": "Get API key details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/key"
						}
					}
				},
				{
					"name": "Rotate Key",
					"value": "Rotate Key",
					"action": "Rotate the API key secret and return the updated key",
					"description": "Rotate the API key secret and return the updated key",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/key/rotate"
						}
					}
				},
				{
					"name": "Get Services",
					"value": "Get Services",
					"action": "Get all services",
					"description": "Get all services",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services"
						}
					}
				},
				{
					"name": "Remove Service",
					"value": "Remove Service",
					"action": "Remove a service",
					"description": "Remove a service",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/services/{{$parameter[\"service_id\"]}}"
						}
					}
				},
				{
					"name": "Get Service",
					"value": "Get Service",
					"action": "Get service details",
					"description": "Get service details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/{{$parameter[\"service_id\"]}}"
						}
					}
				},
				{
					"name": "Get Sites",
					"value": "Get Sites",
					"action": "Get all sites",
					"description": "Get all sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/sites"
						}
					}
				},
				{
					"name": "Create Site",
					"value": "Create Site",
					"action": "Create a new site",
					"description": "Create a new site",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/org/sites"
						}
					}
				},
				{
					"name": "Remove Site",
					"value": "Remove Site",
					"action": "Remove a site and associated assets",
					"description": "Remove a site and associated assets",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}"
						}
					}
				},
				{
					"name": "Get Site",
					"value": "Get Site",
					"action": "Get site details",
					"description": "Get site details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}"
						}
					}
				},
				{
					"name": "Update Site",
					"value": "Update Site",
					"action": "Update a site definition",
					"description": "Update a site definition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}"
						}
					}
				},
				{
					"name": "Import Scan Data",
					"value": "Import Scan Data",
					"action": "Import a scan data file into a site",
					"description": "Import a scan data file into a site",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}/import"
						}
					}
				},
				{
					"name": "Import Nessus Scan Data",
					"value": "Import Nessus Scan Data",
					"action": "Import a Nessus scan data file into a site",
					"description": "Import a Nessus scan data file into a site",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}/import/nessus"
						}
					}
				},
				{
					"name": "Create Scan",
					"value": "Create Scan",
					"action": "Create a scan task for a given site",
					"description": "Create a scan task for a given site",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/org/sites/{{$parameter[\"site_id\"]}}/scan"
						}
					}
				},
				{
					"name": "Get Tasks",
					"value": "Get Tasks",
					"action": "Get all tasks (last 1000)",
					"description": "Get all tasks (last 1000)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/tasks"
						}
					}
				},
				{
					"name": "Get Task",
					"value": "Get Task",
					"action": "Get task details",
					"description": "Get task details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}"
						}
					}
				},
				{
					"name": "Update Task",
					"value": "Update Task",
					"action": "Update task parameters",
					"description": "Update task parameters",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}"
						}
					}
				},
				{
					"name": "Get Task Change Report",
					"value": "Get Task Change Report",
					"action": "Returns a temporary task change report data url",
					"description": "Returns a temporary task change report data url",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}/changes"
						}
					}
				},
				{
					"name": "Get Task Scan Data",
					"value": "Get Task Scan Data",
					"action": "Returns a temporary task scan data url",
					"description": "Returns a temporary task scan data url",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}/data"
						}
					}
				},
				{
					"name": "Hide Task",
					"value": "Hide Task",
					"action": "Signal that a completed task should be hidden",
					"description": "Signal that a completed task should be hidden",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}/hide"
						}
					}
				},
				{
					"name": "Get Task Log",
					"value": "Get Task Log",
					"action": "Returns a temporary task log data url",
					"description": "Returns a temporary task log data url",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}/log"
						}
					}
				},
				{
					"name": "Stop Task",
					"value": "Stop Task",
					"action": "Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks",
					"description": "Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/org/tasks/{{$parameter[\"task_id\"]}}/stop"
						}
					}
				},
				{
					"name": "Get Wireless LA Ns",
					"value": "Get Wireless LA Ns",
					"action": "Get all wireless LANs",
					"description": "Get all wireless LANs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/wireless"
						}
					}
				},
				{
					"name": "Remove Wireless LAN",
					"value": "Remove Wireless LAN",
					"action": "Remove a wireless LAN",
					"description": "Remove a wireless LAN",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/org/wireless/{{$parameter[\"wireless_id\"]}}"
						}
					}
				},
				{
					"name": "Get Wireless LAN",
					"value": "Get Wireless LAN",
					"action": "Get wireless LAN details",
					"description": "Get wireless LAN details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/wireless/{{$parameter[\"wireless_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /org",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Organization"
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
						"Organization"
					],
					"operation": [
						"Get Organization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Wobbly Widgets, Inc.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Expiration Assets Offline",
			"name": "expiration_assets_offline",
			"type": "string",
			"default": "365",
			"routing": {
				"send": {
					"property": "expiration_assets_offline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Expiration Assets Stale",
			"name": "expiration_assets_stale",
			"type": "string",
			"default": "365",
			"routing": {
				"send": {
					"property": "expiration_assets_stale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Expiration Scans",
			"name": "expiration_scans",
			"type": "string",
			"default": "365",
			"routing": {
				"send": {
					"property": "expiration_scans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Export Token",
			"name": "export_token",
			"type": "string",
			"default": "ETXXXXXXXXXXXXXXXX",
			"routing": {
				"send": {
					"property": "export_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Organization",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Project",
			"name": "project",
			"type": "string",
			"default": false,
			"routing": {
				"send": {
					"property": "project",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Organization"
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
						"Organization"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /org/agents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Agents"
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
						"Organization"
					],
					"operation": [
						"Get Agents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/agents/{agent_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Agent"
					]
				}
			}
		},
		{
			"displayName": "Agent ID",
			"name": "agent_id",
			"required": true,
			"description": "UUID of the agent to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Agent"
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
						"Organization"
					],
					"operation": [
						"Remove Agent"
					]
				}
			}
		},
		{
			"displayName": "GET /org/agents/{agent_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Agent"
					]
				}
			}
		},
		{
			"displayName": "Agent ID",
			"name": "agent_id",
			"required": true,
			"description": "UUID of the agent",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Agent"
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
						"Organization"
					],
					"operation": [
						"Get Agent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/agents/{agent_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Agent Site"
					]
				}
			}
		},
		{
			"displayName": "Agent ID",
			"name": "agent_id",
			"required": true,
			"description": "UUID of the agent to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Agent Site"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Site ID",
			"name": "site_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "site_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Agent Site"
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
						"Organization"
					],
					"operation": [
						"Update Agent Site"
					]
				}
			}
		},
		{
			"displayName": "POST /org/agents/{agent_id}/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Upgrade Agent"
					]
				}
			}
		},
		{
			"displayName": "Agent ID",
			"name": "agent_id",
			"required": true,
			"description": "UUID of the agent to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Upgrade Agent"
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
						"Organization"
					],
					"operation": [
						"Upgrade Agent"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Assets"
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
						"Organization"
					],
					"operation": [
						"Get Assets"
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
						"Organization"
					],
					"operation": [
						"Get Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /org/assets/bulk/clearTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Clear Bulk Asset Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "alive:true and os:windows",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Clear Bulk Asset Tags"
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
						"Organization"
					],
					"operation": [
						"Clear Bulk Asset Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/assets/bulk/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Bulk Asset Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "alive:true and os:windows",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Bulk Asset Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "ThisTag=Value -OldTag",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Bulk Asset Tags"
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
						"Organization"
					],
					"operation": [
						"Update Bulk Asset Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/assets/{asset_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Asset"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"required": true,
			"description": "UUID of the asset to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Asset"
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
						"Organization"
					],
					"operation": [
						"Remove Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets/{asset_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Asset"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"required": true,
			"description": "UUID of the asset to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Asset"
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
						"Organization"
					],
					"operation": [
						"Get Asset"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/assets/{asset_id}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Comments"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"required": true,
			"description": "UUID of the asset to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Comments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "Sales Laptop",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Comments"
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
						"Organization"
					],
					"operation": [
						"Update Asset Comments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/assets/{asset_id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Tags"
					]
				}
			}
		},
		{
			"displayName": "Asset ID",
			"name": "asset_id",
			"required": true,
			"description": "UUID of the asset to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "ThisTag=Value -OldTag",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Asset Tags"
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
						"Organization"
					],
					"operation": [
						"Update Asset Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Key"
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
						"Organization"
					],
					"operation": [
						"Remove Key"
					]
				}
			}
		},
		{
			"displayName": "GET /org/key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Key"
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
						"Organization"
					],
					"operation": [
						"Get Key"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/key/rotate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Rotate Key"
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
						"Organization"
					],
					"operation": [
						"Rotate Key"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Services"
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
						"Organization"
					],
					"operation": [
						"Get Services"
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
						"Organization"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/services/{service_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Service"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"required": true,
			"description": "UUID of the service to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Service"
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
						"Organization"
					],
					"operation": [
						"Remove Service"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/{service_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Service"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"required": true,
			"description": "UUID of the service to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Service"
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
						"Organization"
					],
					"operation": [
						"Get Service"
					]
				}
			}
		},
		{
			"displayName": "GET /org/sites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Sites"
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
						"Organization"
					],
					"operation": [
						"Get Sites"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Site"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "County Office",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Site"
					]
				}
			}
		},
		{
			"displayName": "Excludes",
			"name": "excludes",
			"type": "string",
			"default": "192.168.10.1",
			"routing": {
				"send": {
					"property": "excludes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Site"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "New Site",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Site"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "192.168.10.0/24",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Site"
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
						"Organization"
					],
					"operation": [
						"Create Site"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/sites/{site_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Site"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Site"
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
						"Organization"
					],
					"operation": [
						"Remove Site"
					]
				}
			}
		},
		{
			"displayName": "GET /org/sites/{site_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Site"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Site"
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
						"Organization"
					],
					"operation": [
						"Get Site"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/sites/{site_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "County Office",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"displayName": "Excludes",
			"name": "excludes",
			"type": "string",
			"default": "192.168.10.1",
			"routing": {
				"send": {
					"property": "excludes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "New Site",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "192.168.10.0/24",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Site"
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
						"Organization"
					],
					"operation": [
						"Update Site"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/import",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Scan Data"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site to import scan data into",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Scan Data"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/import<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Scan Data"
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
						"Organization"
					],
					"operation": [
						"Import Scan Data"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/import/nessus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Nessus Scan Data"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site to import Nessus scan data into",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Nessus Scan Data"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/import/nessus<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Import Nessus Scan Data"
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
						"Organization"
					],
					"operation": [
						"Import Nessus Scan Data"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/scan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Scan"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"required": true,
			"description": "UUID or name of the site to scan",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Scan"
					]
				}
			}
		},
		{
			"displayName": "PUT /org/sites/{site_id}/scan<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Create Scan"
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
						"Organization"
					],
					"operation": [
						"Create Scan"
					]
				}
			}
		},
		{
			"displayName": "GET /org/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "an optional status string for filtering results",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Tasks"
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
						"Organization"
					],
					"operation": [
						"Get Tasks"
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
						"Organization"
					],
					"operation": [
						"Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /org/tasks/{task_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task"
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
						"Organization"
					],
					"operation": [
						"Get Task"
					]
				}
			}
		},
		{
			"displayName": "PATCH /org/tasks/{task_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Agent ID",
			"name": "agent_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "agent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "client_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "client_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "user@example.com",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Created By User ID",
			"name": "created_by_user_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "created_by_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Cruncher ID",
			"name": "cruncher_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "cruncher_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Scan the headquarters hourly",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Error",
			"name": "error",
			"type": "string",
			"default": "agent unavailable",
			"routing": {
				"send": {
					"property": "error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Hidden",
			"name": "hidden",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "hidden",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Hourly Scan",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organization_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "organization_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Params",
			"name": "params",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "params",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Recur",
			"name": "recur",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "recur",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Recur Frequency",
			"name": "recur_frequency",
			"type": "string",
			"default": "hour",
			"routing": {
				"send": {
					"property": "recur_frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Recur Last",
			"name": "recur_last",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "recur_last",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Recur Last Task ID",
			"name": "recur_last_task_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "recur_last_task_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Recur Next",
			"name": "recur_next",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "recur_next",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
			"name": "site_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "site_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "start_time",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "start_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Stats",
			"name": "stats",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "stats",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "processed",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Template ID",
			"name": "template_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "template_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "scan",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Update Task"
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
						"Organization"
					],
					"operation": [
						"Update Task"
					]
				}
			}
		},
		{
			"displayName": "GET /org/tasks/{task_id}/changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Change Report"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Change Report"
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
						"Organization"
					],
					"operation": [
						"Get Task Change Report"
					]
				}
			}
		},
		{
			"displayName": "GET /org/tasks/{task_id}/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Scan Data"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Scan Data"
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
						"Organization"
					],
					"operation": [
						"Get Task Scan Data"
					]
				}
			}
		},
		{
			"displayName": "POST /org/tasks/{task_id}/hide",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Hide Task"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task to hide",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Hide Task"
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
						"Organization"
					],
					"operation": [
						"Hide Task"
					]
				}
			}
		},
		{
			"displayName": "GET /org/tasks/{task_id}/log",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Log"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Task Log"
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
						"Organization"
					],
					"operation": [
						"Get Task Log"
					]
				}
			}
		},
		{
			"displayName": "POST /org/tasks/{task_id}/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Stop Task"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"required": true,
			"description": "UUID of the task to stop",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Stop Task"
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
						"Organization"
					],
					"operation": [
						"Stop Task"
					]
				}
			}
		},
		{
			"displayName": "GET /org/wireless",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Wireless LA Ns"
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
						"Organization"
					],
					"operation": [
						"Get Wireless LA Ns"
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
						"Organization"
					],
					"operation": [
						"Get Wireless LA Ns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /org/wireless/{wireless_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Wireless LAN"
					]
				}
			}
		},
		{
			"displayName": "Wireless ID",
			"name": "wireless_id",
			"required": true,
			"description": "UUID of the wireless LAN to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Remove Wireless LAN"
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
						"Organization"
					],
					"operation": [
						"Remove Wireless LAN"
					]
				}
			}
		},
		{
			"displayName": "GET /org/wireless/{wireless_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Wireless LAN"
					]
				}
			}
		},
		{
			"displayName": "Wireless ID",
			"name": "wireless_id",
			"required": true,
			"description": "UUID of the wireless LAN to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization"
					],
					"operation": [
						"Get Wireless LAN"
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
						"Organization"
					],
					"operation": [
						"Get Wireless LAN"
					]
				}
			}
		},
];
