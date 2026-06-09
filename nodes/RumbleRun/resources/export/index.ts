import type { INodeProperties } from 'n8n-workflow';

export const exportDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					]
				}
			},
			"options": [
				{
					"name": "Export Assets CSV",
					"value": "Export Assets CSV",
					"action": "Asset inventory as CSV",
					"description": "Asset inventory as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.csv"
						}
					}
				},
				{
					"name": "Export Assets JSON",
					"value": "Export Assets JSON",
					"action": "Exports the asset inventory",
					"description": "Exports the asset inventory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.json"
						}
					}
				},
				{
					"name": "Export Assets JSONL",
					"value": "Export Assets JSONL",
					"action": "Asset inventory as JSON line-delimited",
					"description": "Asset inventory as JSON line-delimited",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.jsonl"
						}
					}
				},
				{
					"name": "Export Assets Nmap XML",
					"value": "Export Assets Nmap XML",
					"action": "Asset inventory as Nmap-style XML",
					"description": "Asset inventory as Nmap-style XML",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/assets.nmap.xml"
						}
					}
				},
				{
					"name": "Export Services CSV",
					"value": "Export Services CSV",
					"action": "Service inventory as CSV",
					"description": "Service inventory as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/services.csv"
						}
					}
				},
				{
					"name": "Export Services JSON",
					"value": "Export Services JSON",
					"action": "Service inventory as JSON",
					"description": "Service inventory as JSON",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/services.json"
						}
					}
				},
				{
					"name": "Export Services JSONL",
					"value": "Export Services JSONL",
					"action": "Service inventory as JSON line-delimited",
					"description": "Service inventory as JSON line-delimited",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/services.jsonl"
						}
					}
				},
				{
					"name": "Export Sites CSV",
					"value": "Export Sites CSV",
					"action": "Site list as CSV",
					"description": "Site list as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/sites.csv"
						}
					}
				},
				{
					"name": "Export Sites JSON",
					"value": "Export Sites JSON",
					"action": "Export all sites",
					"description": "Export all sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/sites.json"
						}
					}
				},
				{
					"name": "Export Sites JSONL",
					"value": "Export Sites JSONL",
					"action": "Site list as JSON line-delimited",
					"description": "Site list as JSON line-delimited",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/sites.jsonl"
						}
					}
				},
				{
					"name": "Export Wireless CSV",
					"value": "Export Wireless CSV",
					"action": "Wireless inventory as CSV",
					"description": "Wireless inventory as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/wireless.csv"
						}
					}
				},
				{
					"name": "Export Wireless JSON",
					"value": "Export Wireless JSON",
					"action": "Wireless inventory as JSON",
					"description": "Wireless inventory as JSON",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/wireless.json"
						}
					}
				},
				{
					"name": "Export Wireless JSONL",
					"value": "Export Wireless JSONL",
					"action": "Wireless inventory as JSON line-delimited",
					"description": "Wireless inventory as JSON line-delimited",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/export/org/wireless.jsonl"
						}
					}
				},
				{
					"name": "Export Asset Top HWCSV",
					"value": "Export Asset Top HWCSV",
					"action": "Top asset hardware products as CSV",
					"description": "Top asset hardware products as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets/top.hw.csv"
						}
					}
				},
				{
					"name": "Export Asset Top OSCSV",
					"value": "Export Asset Top OSCSV",
					"action": "Top asset operating systems as CSV",
					"description": "Top asset operating systems as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets/top.os.csv"
						}
					}
				},
				{
					"name": "Export Asset Top Tags CSV",
					"value": "Export Asset Top Tags CSV",
					"action": "Top asset tags as CSV",
					"description": "Top asset tags as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets/top.tags.csv"
						}
					}
				},
				{
					"name": "Export Asset Top Types CSV",
					"value": "Export Asset Top Types CSV",
					"action": "Top asset types as CSV",
					"description": "Top asset types as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/assets/top.types.csv"
						}
					}
				},
				{
					"name": "Export Subnet Utilization Stats CSV",
					"value": "Export Subnet Utilization Stats CSV",
					"action": "Subnet utilization statistics as as CSV",
					"description": "Subnet utilization statistics as as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/subnet.stats.csv"
						}
					}
				},
				{
					"name": "Export Services Top Products CSV",
					"value": "Export Services Top Products CSV",
					"action": "Top service products as CSV",
					"description": "Top service products as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/top.products.csv"
						}
					}
				},
				{
					"name": "Export Services Top Protocols CSV",
					"value": "Export Services Top Protocols CSV",
					"action": "Top service protocols as CSV",
					"description": "Top service protocols as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/top.protocols.csv"
						}
					}
				},
				{
					"name": "Export Services Top TCPCSV",
					"value": "Export Services Top TCPCSV",
					"action": "Top TCP services as CSV",
					"description": "Top TCP services as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/top.tcp.csv"
						}
					}
				},
				{
					"name": "Export Services Top UDPCSV",
					"value": "Export Services Top UDPCSV",
					"action": "Top UDP services as CSV",
					"description": "Top UDP services as CSV",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org/services/top.udp.csv"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /export/org/assets.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Assets CSV"
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
						"Export"
					],
					"operation": [
						"Export Assets CSV"
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
						"Export"
					],
					"operation": [
						"Export Assets CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/assets.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Assets JSON"
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
						"Export"
					],
					"operation": [
						"Export Assets JSON"
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
						"Export"
					],
					"operation": [
						"Export Assets JSON"
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
						"Export"
					],
					"operation": [
						"Export Assets JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/assets.jsonl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Assets JSONL"
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
						"Export"
					],
					"operation": [
						"Export Assets JSONL"
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
						"Export"
					],
					"operation": [
						"Export Assets JSONL"
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
						"Export"
					],
					"operation": [
						"Export Assets JSONL"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/assets.nmap.xml",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Assets Nmap XML"
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
						"Export"
					],
					"operation": [
						"Export Assets Nmap XML"
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
						"Export"
					],
					"operation": [
						"Export Assets Nmap XML"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/services.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services CSV"
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
						"Export"
					],
					"operation": [
						"Export Services CSV"
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
						"Export"
					],
					"operation": [
						"Export Services CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/services.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services JSON"
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
						"Export"
					],
					"operation": [
						"Export Services JSON"
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
						"Export"
					],
					"operation": [
						"Export Services JSON"
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
						"Export"
					],
					"operation": [
						"Export Services JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/services.jsonl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services JSONL"
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
						"Export"
					],
					"operation": [
						"Export Services JSONL"
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
						"Export"
					],
					"operation": [
						"Export Services JSONL"
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
						"Export"
					],
					"operation": [
						"Export Services JSONL"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/sites.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Sites CSV"
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
						"Export"
					],
					"operation": [
						"Export Sites CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/sites.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Sites JSON"
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
						"Export"
					],
					"operation": [
						"Export Sites JSON"
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
						"Export"
					],
					"operation": [
						"Export Sites JSON"
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
						"Export"
					],
					"operation": [
						"Export Sites JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/sites.jsonl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Sites JSONL"
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
						"Export"
					],
					"operation": [
						"Export Sites JSONL"
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
						"Export"
					],
					"operation": [
						"Export Sites JSONL"
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
						"Export"
					],
					"operation": [
						"Export Sites JSONL"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/wireless.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Wireless CSV"
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
						"Export"
					],
					"operation": [
						"Export Wireless CSV"
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
						"Export"
					],
					"operation": [
						"Export Wireless CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/wireless.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Wireless JSON"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSON"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSON"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /export/org/wireless.jsonl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Wireless JSONL"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSONL"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSONL"
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
						"Export"
					],
					"operation": [
						"Export Wireless JSONL"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets/top.hw.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Asset Top HWCSV"
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
						"Export"
					],
					"operation": [
						"Export Asset Top HWCSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets/top.os.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Asset Top OSCSV"
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
						"Export"
					],
					"operation": [
						"Export Asset Top OSCSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets/top.tags.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Asset Top Tags CSV"
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
						"Export"
					],
					"operation": [
						"Export Asset Top Tags CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/assets/top.types.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Asset Top Types CSV"
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
						"Export"
					],
					"operation": [
						"Export Asset Top Types CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/subnet.stats.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Subnet Utilization Stats CSV"
					]
				}
			}
		},
		{
			"displayName": "Mask",
			"name": "mask",
			"description": "an optional subnet mask size (ex:24)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mask",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Subnet Utilization Stats CSV"
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
						"Export"
					],
					"operation": [
						"Export Subnet Utilization Stats CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/top.products.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services Top Products CSV"
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
						"Export"
					],
					"operation": [
						"Export Services Top Products CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/top.protocols.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services Top Protocols CSV"
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
						"Export"
					],
					"operation": [
						"Export Services Top Protocols CSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/top.tcp.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services Top TCPCSV"
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
						"Export"
					],
					"operation": [
						"Export Services Top TCPCSV"
					]
				}
			}
		},
		{
			"displayName": "GET /org/services/top.udp.csv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Export"
					],
					"operation": [
						"Export Services Top UDPCSV"
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
						"Export"
					],
					"operation": [
						"Export Services Top UDPCSV"
					]
				}
			}
		},
];
