# @n8n-dev/n8n-nodes-rumble-run

![rumble-run Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-rumble-run.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-rumble-run)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing rumble-run API integrations by hand.**

Every time you connect n8n to rumble-run, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to rumble-run took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Account**, **Cisco SNTC**, **Export**, **Service Now**, **Splunk**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-rumble-run
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-rumble-run`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **rumble-run API** → paste your API key
3. Drag the **rumble-run** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Account</b> (46 operations)</summary>

- Get all agents across all organizations
- Get all account credentials
- Put Create a new credential
- Delete Remove this credential
- Get credential details
- Get System event log as JSON
- Get System event log as JSON line delimited
- Get all groups
- Post Create a new group
- Put Update an existing group
- Delete Remove this group
- Get group details
- Get all active API keys
- Put Create a new key
- Delete Remove this key
- Get key details
- Patch Rotates the key secret
- Get license details
- Get all organization details
- Put Create a new organization
- Delete Remove this organization
- Get organization details
- Patch Update organization details
- Delete Removes the export token from the specified organization
- Patch Rotates the organization export token and returns the updated organization
- Get all sites details across all organizations
- Get all SSO group mappings
- Post Create a new SSO group mapping
- Put Update an existing SSO group mapping
- Delete Remove this SSO group mapping
- Get SSO group mapping details
- Get all task details across all organizations up to 1000
- Get all scan templates across all organizations up to 1000
- Post Create a new scan template
- Put Update scan template
- Delete Remove scan template
- Get scan template details
- Get all users
- Put Create a new user account
- Put Create a new user account and send an email invite
- Delete Remove this user
- Get user details
- Patch Update a user s details
- Patch Resets the user s lockout status
- Patch Resets the user s MFA tokens
- Patch Sends the user a password reset email

</details>

<details>
<summary><b>Cisco SNTC</b> (1 operations)</summary>

- Get Cisco serial number and model name export for Cisco Smart Net Total Care Service

</details>

<details>
<summary><b>Export</b> (22 operations)</summary>

- Get Asset inventory as CSV
- Get Exports the asset inventory
- Get Asset inventory as JSON line delimited
- Get Asset inventory as Nmap style XML
- Get Service inventory as CSV
- Get Service inventory as JSON
- Get Service inventory as JSON line delimited
- Get Site list as CSV
- Get Export all sites
- Get Site list as JSON line delimited
- Get Wireless inventory as CSV
- Get Wireless inventory as JSON
- Get Wireless inventory as JSON line delimited
- Get Top asset hardware products as CSV
- Get Top asset operating systems as CSV
- Get Top asset tags as CSV
- Get Top asset types as CSV
- Get Subnet utilization statistics as as CSV
- Get Top service products as CSV
- Get Top service protocols as CSV
- Get Top TCP services as CSV
- Get Top UDP services as CSV

</details>

<details>
<summary><b>Service Now</b> (3 operations)</summary>

- Get Export an asset inventory as CSV for ServiceNow integration
- Get Exports the asset inventory as JSON
- Get Export a service inventory as CSV for ServiceNow integration

</details>

<details>
<summary><b>Splunk</b> (2 operations)</summary>

- Get Exports the asset inventory in a sync friendly manner using created at as a checkpoint Requires the Splunk entitlement
- Get Exports the asset inventory in a sync friendly manner using updated at as a checkpoint Requires the Splunk entitlement

</details>

<details>
<summary><b>Organization</b> (39 operations)</summary>

- Get organization details
- Patch Update organization details
- Get all agents
- Delete Remove and uninstall an agent
- Get details for a single agent
- Patch Update the site associated with agent
- Post Force an agent to update and restart
- Get all assets
- Post Clear all tags across multiple assets based on a search query
- Patch Update tags across multiple assets based on a search query
- Delete Remove an asset
- Get asset details
- Patch Update asset comments
- Patch Update asset tags
- Delete Remove the current API key
- Get API key details
- Patch Rotate the API key secret and return the updated key
- Get all services
- Delete Remove a service
- Get service details
- Get all sites
- Put Create a new site
- Delete Remove a site and associated assets
- Get site details
- Patch Update a site definition
- Put Import a scan data file into a site
- Put Import a Nessus scan data file into a site
- Put Create a scan task for a given site
- Get all tasks last 1000
- Get task details
- Patch Update task parameters
- Get Returns a temporary task change report data URL
- Get Returns a temporary task scan data URL
- Post Signal that a completed task should be hidden
- Get Returns a temporary task log data URL
- Post Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
- Get all wireless LANs
- Delete Remove a wireless LAN
- Get wireless LAN details

</details>

<details>
<summary><b>Public</b> (3 operations)</summary>

- Get Returns latest agent version
- Get Returns latest platform version
- Get Returns latest scanner version

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from rumble-run docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official rumble-run OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **rumble-run** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the rumble-run API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
