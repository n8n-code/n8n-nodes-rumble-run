import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Agents",
					"value": "Get Account Agents",
					"action": "Get all agents across all organizations",
					"description": "Get all agents across all organizations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/agents"
						}
					}
				},
				{
					"name": "Get Account Credentials",
					"value": "Get Account Credentials",
					"action": "Get all account credentials",
					"description": "Get all account credentials",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/credentials"
						}
					}
				},
				{
					"name": "Create Account Credential",
					"value": "Create Account Credential",
					"action": "Create a new credential",
					"description": "Create a new credential",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/credentials"
						}
					}
				},
				{
					"name": "Remove Account Credential",
					"value": "Remove Account Credential",
					"action": "Remove this credential",
					"description": "Remove this credential",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/credentials/{{$parameter[\"credential_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Credential",
					"value": "Get Account Credential",
					"action": "Get credential details",
					"description": "Get credential details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/credentials/{{$parameter[\"credential_id\"]}}"
						}
					}
				},
				{
					"name": "Export Events JSON",
					"value": "Export Events JSON",
					"action": "System event log as JSON",
					"description": "System event log as JSON",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/events.json"
						}
					}
				},
				{
					"name": "Export Events JSONL",
					"value": "Export Events JSONL",
					"action": "System event log as JSON line-delimited",
					"description": "System event log as JSON line-delimited",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/events.jsonl"
						}
					}
				},
				{
					"name": "Get Account Groups",
					"value": "Get Account Groups",
					"action": "Get all groups",
					"description": "Get all groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/groups"
						}
					}
				},
				{
					"name": "Create Account Group",
					"value": "Create Account Group",
					"action": "Create a new group",
					"description": "Create a new group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/groups"
						}
					}
				},
				{
					"name": "Update Account Group",
					"value": "Update Account Group",
					"action": "Update an existing group",
					"description": "Update an existing group",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/groups"
						}
					}
				},
				{
					"name": "Remove Account Group",
					"value": "Remove Account Group",
					"action": "Remove this group",
					"description": "Remove this group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/groups/{{$parameter[\"group_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Group",
					"value": "Get Account Group",
					"action": "Get group details",
					"description": "Get group details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/groups/{{$parameter[\"group_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Keys",
					"value": "Get Account Keys",
					"action": "Get all active API keys",
					"description": "Get all active API keys",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/keys"
						}
					}
				},
				{
					"name": "Create Account Key",
					"value": "Create Account Key",
					"action": "Create a new key",
					"description": "Create a new key",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/keys"
						}
					}
				},
				{
					"name": "Remove Account Key",
					"value": "Remove Account Key",
					"action": "Remove this key",
					"description": "Remove this key",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/keys/{{$parameter[\"key_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Key",
					"value": "Get Account Key",
					"action": "Get key details",
					"description": "Get key details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/keys/{{$parameter[\"key_id\"]}}"
						}
					}
				},
				{
					"name": "Rotate Account Key",
					"value": "Rotate Account Key",
					"action": "Rotates the key secret",
					"description": "Rotates the key secret",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/keys/{{$parameter[\"key_id\"]}}/rotate"
						}
					}
				},
				{
					"name": "Get Account License",
					"value": "Get Account License",
					"action": "Get license details",
					"description": "Get license details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/license"
						}
					}
				},
				{
					"name": "Get Account Organizations",
					"value": "Get Account Organizations",
					"action": "Get all organization details",
					"description": "Get all organization details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/orgs"
						}
					}
				},
				{
					"name": "Create Account Organization",
					"value": "Create Account Organization",
					"action": "Create a new organization",
					"description": "Create a new organization",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/orgs"
						}
					}
				},
				{
					"name": "Remove Account Organization",
					"value": "Remove Account Organization",
					"action": "Remove this organization",
					"description": "Remove this organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/orgs/{{$parameter[\"org_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Organization",
					"value": "Get Account Organization",
					"action": "Get organization details",
					"description": "Get organization details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/orgs/{{$parameter[\"org_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account Organization",
					"value": "Update Account Organization",
					"action": "Update organization details",
					"description": "Update organization details",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/orgs/{{$parameter[\"org_id\"]}}"
						}
					}
				},
				{
					"name": "Delete Account Organization Export Token",
					"value": "Delete Account Organization Export Token",
					"action": "Removes the export token from the specified organization",
					"description": "Removes the export token from the specified organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/orgs/{{$parameter[\"org_id\"]}}/exportToken"
						}
					}
				},
				{
					"name": "Rotate Account Organization Export Token",
					"value": "Rotate Account Organization Export Token",
					"action": "Rotates the organization export token and returns the updated organization",
					"description": "Rotates the organization export token and returns the updated organization",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/orgs/{{$parameter[\"org_id\"]}}/exportToken/rotate"
						}
					}
				},
				{
					"name": "Get Account Sites",
					"value": "Get Account Sites",
					"action": "Get all sites details across all organizations",
					"description": "Get all sites details across all organizations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/sites"
						}
					}
				},
				{
					"name": "Get Account Group Mappings",
					"value": "Get Account Group Mappings",
					"action": "Get all SSO group mappings",
					"description": "Get all SSO group mappings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/sso/groups"
						}
					}
				},
				{
					"name": "Create Account Group Mapping",
					"value": "Create Account Group Mapping",
					"action": "Create a new SSO group mapping",
					"description": "Create a new SSO group mapping",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/sso/groups"
						}
					}
				},
				{
					"name": "Update Account Group Mapping",
					"value": "Update Account Group Mapping",
					"action": "Update an existing SSO group mapping",
					"description": "Update an existing SSO group mapping",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/sso/groups"
						}
					}
				},
				{
					"name": "Remove Account Group Mapping",
					"value": "Remove Account Group Mapping",
					"action": "Remove this SSO group mapping",
					"description": "Remove this SSO group mapping",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/sso/groups/{{$parameter[\"group_mapping_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Group Mapping",
					"value": "Get Account Group Mapping",
					"action": "Get SSO group mapping details",
					"description": "Get SSO group mapping details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/sso/groups/{{$parameter[\"group_mapping_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Tasks",
					"value": "Get Account Tasks",
					"action": "Get all task details across all organizations (up to 1000)",
					"description": "Get all task details across all organizations (up to 1000)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/tasks"
						}
					}
				},
				{
					"name": "Get Account Scan Templates",
					"value": "Get Account Scan Templates",
					"action": "Get all scan templates across all organizations (up to 1000)",
					"description": "Get all scan templates across all organizations (up to 1000)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/tasks/templates"
						}
					}
				},
				{
					"name": "Create Account Scan Template",
					"value": "Create Account Scan Template",
					"action": "Create a new scan template",
					"description": "Create a new scan template",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/tasks/templates"
						}
					}
				},
				{
					"name": "Update Account Scan Template",
					"value": "Update Account Scan Template",
					"action": "Update scan template",
					"description": "Update scan template",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/tasks/templates"
						}
					}
				},
				{
					"name": "Remove Account Scan Template",
					"value": "Remove Account Scan Template",
					"action": "Remove scan template",
					"description": "Remove scan template",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/tasks/templates/{{$parameter[\"scan_template_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Scan Template",
					"value": "Get Account Scan Template",
					"action": "Get scan template details",
					"description": "Get scan template details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/tasks/templates/{{$parameter[\"scan_template_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account Users",
					"value": "Get Account Users",
					"action": "Get all users",
					"description": "Get all users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/users"
						}
					}
				},
				{
					"name": "Create Account User",
					"value": "Create Account User",
					"action": "Create a new user account",
					"description": "Create a new user account",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/users"
						}
					}
				},
				{
					"name": "Create Account User Invite",
					"value": "Create Account User Invite",
					"action": "Create a new user account and send an email invite",
					"description": "Create a new user account and send an email invite",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/users/invite"
						}
					}
				},
				{
					"name": "Remove Account User",
					"value": "Remove Account User",
					"action": "Remove this user",
					"description": "Remove this user",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Get Account User",
					"value": "Get Account User",
					"action": "Get user details",
					"description": "Get user details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account User",
					"value": "Update Account User",
					"action": "Update a user's details",
					"description": "Update a user's details",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Reset Account User Lockout",
					"value": "Reset Account User Lockout",
					"action": "Resets the user's lockout status",
					"description": "Resets the user's lockout status",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}/resetLockout"
						}
					}
				},
				{
					"name": "Reset Account User MFA",
					"value": "Reset Account User MFA",
					"action": "Resets the user's MFA tokens",
					"description": "Resets the user's MFA tokens",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}/resetMFA"
						}
					}
				},
				{
					"name": "Reset Account User Password",
					"value": "Reset Account User Password",
					"action": "Sends the user a password reset email",
					"description": "Sends the user a password reset email",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/account/users/{{$parameter[\"user_id\"]}}/resetPassword"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account/agents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Agents"
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
						"Account"
					],
					"operation": [
						"Get Account Agents"
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
						"Account"
					],
					"operation": [
						"Get Account Agents"
					]
				}
			}
		},
		{
			"displayName": "GET /account/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Credentials"
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
						"Account"
					],
					"operation": [
						"Get Account Credentials"
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
						"Account"
					],
					"operation": [
						"Get Account Credentials"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Acl",
			"name": "acl",
			"type": "json",
			"default": "{\n  \"e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8\": \"user\",\n  \"e77602e0-3fb8-4734-aef9-fbc6fdcb0fa9\": \"none\"\n}",
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Cidrs",
			"name": "cidrs",
			"type": "string",
			"default": "10.0.0.17/32, 192.168.1.0/24",
			"routing": {
				"send": {
					"property": "cidrs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Global",
			"name": "global",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "global",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "credentials_name",
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
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": {
				"api_key": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
				"hostname": "yourcompanyinc.online.miradore.com"
			},
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "miradore_api_key_v1",
			"options": [
				{
					"name": "Miradore API Key v1",
					"value": "miradore_api_key_v1"
				},
				{
					"name": "AWS Access Secret",
					"value": "aws_access_secret"
				}
			],
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
						"Account"
					],
					"operation": [
						"Create Account Credential"
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
						"Account"
					],
					"operation": [
						"Create Account Credential"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/credentials/{credential_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Credential ID",
			"name": "credential_id",
			"required": true,
			"description": "UUID of the credential to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Credential"
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
						"Account"
					],
					"operation": [
						"Remove Account Credential"
					]
				}
			}
		},
		{
			"displayName": "GET /account/credentials/{credential_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Credential"
					]
				}
			}
		},
		{
			"displayName": "Credential ID",
			"name": "credential_id",
			"required": true,
			"description": "UUID of the credential to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Credential"
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
						"Account"
					],
					"operation": [
						"Get Account Credential"
					]
				}
			}
		},
		{
			"displayName": "GET /account/events.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Export Events JSON"
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
						"Account"
					],
					"operation": [
						"Export Events JSON"
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
						"Account"
					],
					"operation": [
						"Export Events JSON"
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
						"Account"
					],
					"operation": [
						"Export Events JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /account/events.jsonl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Export Events JSONL"
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
						"Account"
					],
					"operation": [
						"Export Events JSONL"
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
						"Account"
					],
					"operation": [
						"Export Events JSONL"
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
						"Account"
					],
					"operation": [
						"Export Events JSONL"
					]
				}
			}
		},
		{
			"displayName": "GET /account/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Groups"
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
						"Account"
					],
					"operation": [
						"Get Account Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /account/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Viewers Group",
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
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expires_at",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "expires_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Viewers",
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
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "Org Default Role",
			"name": "org_default_role",
			"type": "string",
			"default": "admin",
			"routing": {
				"send": {
					"property": "org_default_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "Org Roles",
			"name": "org_roles",
			"type": "json",
			"default": "{\n  \"1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf\": \"viewer\",\n  \"fd6d6662-732b-4c4b-8331-051178994384\": \"admin\"\n}",
			"routing": {
				"send": {
					"property": "org_roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group"
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
						"Account"
					],
					"operation": [
						"Create Account Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Viewers Group",
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
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "Expires At",
			"name": "expires_at",
			"type": "number",
			"default": 1576300370,
			"routing": {
				"send": {
					"property": "expires_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
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
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Viewers",
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
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "Org Default Role",
			"name": "org_default_role",
			"type": "string",
			"default": "admin",
			"routing": {
				"send": {
					"property": "org_default_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "Org Roles",
			"name": "org_roles",
			"type": "json",
			"default": "{\n  \"1a5e612e-4d64-45fe-aa3e-afba5cf3b9bf\": \"viewer\",\n  \"fd6d6662-732b-4c4b-8331-051178994384\": \"admin\"\n}",
			"routing": {
				"send": {
					"property": "org_roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group"
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
						"Account"
					],
					"operation": [
						"Update Account Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/groups/{group_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Group"
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
						"Account"
					],
					"operation": [
						"Remove Account Group"
					]
				}
			}
		},
		{
			"displayName": "GET /account/groups/{group_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Group"
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
						"Account"
					],
					"operation": [
						"Get Account Group"
					]
				}
			}
		},
		{
			"displayName": "GET /account/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Keys"
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
						"Account"
					],
					"operation": [
						"Get Account Keys"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Key"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "Splunk integration key",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Key"
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
						"Account"
					],
					"operation": [
						"Create Account Key"
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
						"Account"
					],
					"operation": [
						"Create Account Key"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/keys/{key_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Key"
					]
				}
			}
		},
		{
			"displayName": "Key ID",
			"name": "key_id",
			"required": true,
			"description": "UUID of the key to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Key"
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
						"Account"
					],
					"operation": [
						"Remove Account Key"
					]
				}
			}
		},
		{
			"displayName": "GET /account/keys/{key_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Key"
					]
				}
			}
		},
		{
			"displayName": "Key ID",
			"name": "key_id",
			"required": true,
			"description": "UUID of the key to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Key"
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
						"Account"
					],
					"operation": [
						"Get Account Key"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/keys/{key_id}/rotate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Rotate Account Key"
					]
				}
			}
		},
		{
			"displayName": "Key ID",
			"name": "key_id",
			"required": true,
			"description": "UUID of the key to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Rotate Account Key"
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
						"Account"
					],
					"operation": [
						"Rotate Account Key"
					]
				}
			}
		},
		{
			"displayName": "GET /account/license",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account License"
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
						"Account"
					],
					"operation": [
						"Get Account License"
					]
				}
			}
		},
		{
			"displayName": "GET /account/orgs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Organizations"
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
						"Account"
					],
					"operation": [
						"Get Account Organizations"
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
						"Account"
					],
					"operation": [
						"Get Account Organizations"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/orgs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
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
						"Account"
					],
					"operation": [
						"Create Account Organization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/orgs/{org_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Organization"
					]
				}
			}
		},
		{
			"displayName": "Org ID",
			"name": "org_id",
			"required": true,
			"description": "UUID of the organization to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Organization"
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
						"Account"
					],
					"operation": [
						"Remove Account Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /account/orgs/{org_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Organization"
					]
				}
			}
		},
		{
			"displayName": "Org ID",
			"name": "org_id",
			"required": true,
			"description": "UUID of the organization to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Organization"
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
						"Account"
					],
					"operation": [
						"Get Account Organization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/orgs/{org_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Organization"
					]
				}
			}
		},
		{
			"displayName": "Org ID",
			"name": "org_id",
			"required": true,
			"description": "UUID of the organization to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
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
						"Account"
					],
					"operation": [
						"Update Account Organization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/orgs/{org_id}/exportToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Account Organization Export Token"
					]
				}
			}
		},
		{
			"displayName": "Org ID",
			"name": "org_id",
			"required": true,
			"description": "UUID of the organization to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Account Organization Export Token"
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
						"Account"
					],
					"operation": [
						"Delete Account Organization Export Token"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/orgs/{org_id}/exportToken/rotate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Rotate Account Organization Export Token"
					]
				}
			}
		},
		{
			"displayName": "Org ID",
			"name": "org_id",
			"required": true,
			"description": "UUID of the organization to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Rotate Account Organization Export Token"
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
						"Account"
					],
					"operation": [
						"Rotate Account Organization Export Token"
					]
				}
			}
		},
		{
			"displayName": "GET /account/sites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Sites"
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
						"Account"
					],
					"operation": [
						"Get Account Sites"
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
						"Account"
					],
					"operation": [
						"Get Account Sites"
					]
				}
			}
		},
		{
			"displayName": "GET /account/sso/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Group Mappings"
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
						"Account"
					],
					"operation": [
						"Get Account Group Mappings"
					]
				}
			}
		},
		{
			"displayName": "POST /account/sso/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Created By Email",
			"name": "created_by_email",
			"type": "string",
			"default": "jsmith@example.com",
			"routing": {
				"send": {
					"property": "created_by_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Maps basic-attribute to Viewers Group",
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
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Group ID",
			"name": "group_id",
			"type": "string",
			"default": "2b096711-4d28-4417-8635-64af4f62c1ae",
			"routing": {
				"send": {
					"property": "group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "Viewers Group",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
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
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sso Attribute",
			"name": "sso_attribute",
			"type": "string",
			"default": "basic-attribute",
			"routing": {
				"send": {
					"property": "sso_attribute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sso Value",
			"name": "sso_value",
			"type": "string",
			"default": "basic-attribute-value",
			"routing": {
				"send": {
					"property": "sso_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Create Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/sso/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Created By Email",
			"name": "created_by_email",
			"type": "string",
			"default": "jsmith@example.com",
			"routing": {
				"send": {
					"property": "created_by_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Maps basic-attribute to Viewers Group",
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
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Group ID",
			"name": "group_id",
			"type": "string",
			"default": "2b096711-4d28-4417-8635-64af4f62c1ae",
			"routing": {
				"send": {
					"property": "group_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "Viewers Group",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "f6cfb91a-52ea-4a86-bf9a-5a891a26f52b",
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
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sso Attribute",
			"name": "sso_attribute",
			"type": "string",
			"default": "basic-attribute",
			"routing": {
				"send": {
					"property": "sso_attribute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sso Value",
			"name": "sso_value",
			"type": "string",
			"default": "basic-attribute-value",
			"routing": {
				"send": {
					"property": "sso_value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Update Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/sso/groups/{group_mapping_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Remove Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "GET /account/sso/groups/{group_mapping_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Group Mapping"
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
						"Account"
					],
					"operation": [
						"Get Account Group Mapping"
					]
				}
			}
		},
		{
			"displayName": "GET /account/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Tasks"
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
						"Account"
					],
					"operation": [
						"Get Account Tasks"
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
						"Account"
					],
					"operation": [
						"Get Account Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /account/tasks/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Scan Templates"
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
						"Account"
					],
					"operation": [
						"Get Account Scan Templates"
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
						"Account"
					],
					"operation": [
						"Get Account Scan Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /account/tasks/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Acl",
			"name": "acl",
			"type": "json",
			"default": "{\n  \"e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8\": \"user\"\n}",
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "My Scan Template",
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
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Global",
			"name": "global",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "global",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Scan Template",
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
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Create Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/tasks/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Acl",
			"name": "acl",
			"type": "json",
			"default": "{\n  \"e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8\": \"user\"\n}",
			"routing": {
				"send": {
					"property": "acl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "My Scan Template",
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Global",
			"name": "global",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "global",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Grace Period",
			"name": "grace_period",
			"type": "string",
			"default": "4",
			"routing": {
				"send": {
					"property": "grace_period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Hosted Zone ID",
			"name": "hosted_zone_id",
			"type": "string",
			"default": "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
			"routing": {
				"send": {
					"property": "hosted_zone_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Linked Task Count",
			"name": "linked_task_count",
			"type": "number",
			"default": 1,
			"routing": {
				"send": {
					"property": "linked_task_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Scan Template",
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Size Data",
			"name": "size_data",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "size_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Size Results",
			"name": "size_results",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "size_results",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Size Site",
			"name": "size_site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "size_site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "1",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Update Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/tasks/templates/{scan_template_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Scan Template ID",
			"name": "scan_template_id",
			"required": true,
			"description": "UUID of the scan template to remove",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Remove Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "GET /account/tasks/templates/{scan_template_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "Scan Template ID",
			"name": "scan_template_id",
			"required": true,
			"description": "UUID of the scan template to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Scan Template"
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
						"Account"
					],
					"operation": [
						"Get Account Scan Template"
					]
				}
			}
		},
		{
			"displayName": "GET /account/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Users"
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
						"Account"
					],
					"operation": [
						"Get Account Users"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "Client Admin",
			"name": "client_admin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "client_admin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "jsmith@example.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "James",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Smith",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "Org Default Role",
			"name": "org_default_role",
			"type": "string",
			"default": "admin",
			"routing": {
				"send": {
					"property": "org_default_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "Org Roles",
			"name": "org_roles",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "org_roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User"
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
						"Account"
					],
					"operation": [
						"Create Account User"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/users/invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Client Admin",
			"name": "client_admin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "client_admin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "jsmith@example.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "James",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Smith",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "You have been invited to the Rumble Network Discovery platform",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Org Default Role",
			"name": "org_default_role",
			"type": "string",
			"default": "admin",
			"routing": {
				"send": {
					"property": "org_default_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Org Roles",
			"name": "org_roles",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "org_roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "Welcome to Rumble",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Account User Invite"
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
						"Account"
					],
					"operation": [
						"Create Account User Invite"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/users/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account User"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Remove Account User"
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
						"Account"
					],
					"operation": [
						"Remove Account User"
					]
				}
			}
		},
		{
			"displayName": "GET /account/users/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account User"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account User"
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
						"Account"
					],
					"operation": [
						"Get Account User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/users/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "Client Admin",
			"name": "client_admin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "client_admin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "jsmith@example.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "James",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Smith",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "Org Default Role",
			"name": "org_default_role",
			"type": "string",
			"default": "admin",
			"routing": {
				"send": {
					"property": "org_default_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "Org Roles",
			"name": "org_roles",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "org_roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account User"
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
						"Account"
					],
					"operation": [
						"Update Account User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/users/{user_id}/resetLockout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User Lockout"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User Lockout"
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
						"Account"
					],
					"operation": [
						"Reset Account User Lockout"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/users/{user_id}/resetMFA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User MFA"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User MFA"
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
						"Account"
					],
					"operation": [
						"Reset Account User MFA"
					]
				}
			}
		},
		{
			"displayName": "PATCH /account/users/{user_id}/resetPassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User Password"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "UUID of the user to retrieve",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Account User Password"
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
						"Account"
					],
					"operation": [
						"Reset Account User Password"
					]
				}
			}
		},
];
