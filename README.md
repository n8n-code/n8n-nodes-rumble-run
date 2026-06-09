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

| Resource | Operations |
|----------|------------|
| Account | Get all agents across all organizations, Get all account credentials, Put create a new credential, Delete remove this credential, Get credential details, Get system event log as json, Get system event log as json linedelimited, Get all groups, Post create a new group, Put update an existing group, Delete remove this group, Get group details, Get all active api keys, Put create a new key, Delete remove this key, Get key details, Patch rotates the key secret, Get license details, Get all organization details, Put create a new organization, Delete remove this organization, Get organization details, Patch update organization details, Delete removes the export token from the specified organization, Patch rotates the organization export token and returns the updated organization, Get all sites details across all organizations, Get all sso group mappings, Post create a new sso group mapping, Put update an existing sso group mapping, Delete remove this sso group mapping, Get sso group mapping details, Get all task details across all organizations up to 1000, Get all scan templates across all organizations up to 1000, Post create a new scan template, Put update scan template, Delete remove scan template, Get scan template details, Get all users, Put create a new user account, Put create a new user account and send an email invite, Delete remove this user, Get user details, Patch update a users details, Patch resets the users lockout status, Patch resets the users mfa tokens, Patch sends the user a password reset email |
| Cisco SNTC | Get cisco serial number and model name export for cisco smart net total care service |
| Export | Get asset inventory as csv, Get exports the asset inventory, Get asset inventory as json linedelimited, Get asset inventory as nmapstyle xml, Get service inventory as csv, Get service inventory as json, Get service inventory as json linedelimited, Get site list as csv, Get export all sites, Get site list as json linedelimited, Get wireless inventory as csv, Get wireless inventory as json, Get wireless inventory as json linedelimited, Get top asset hardware products as csv, Get top asset operating systems as csv, Get top asset tags as csv, Get top asset types as csv, Get subnet utilization statistics as as csv, Get top service products as csv, Get top service protocols as csv, Get top tcp services as csv, Get top udp services as csv |
| Service Now | Get export an asset inventory as csv for servicenow integration, Get exports the asset inventory as json, Get export a service inventory as csv for servicenow integration |
| Splunk | Get exports the asset inventory in a syncfriendly manner using createdat as a checkpoint requires the splunk entitlement, Get exports the asset inventory in a syncfriendly manner using updatedat as a checkpoint requires the splunk entitlement |
| Organization | Get organization details, Patch update organization details, Get all agents, Delete remove and uninstall an agent, Get details for a single agent, Patch update the site associated with agent, Post force an agent to update and restart, Get all assets, Post clear all tags across multiple assets based on a search query, Patch update tags across multiple assets based on a search query, Delete remove an asset, Get asset details, Patch update asset comments, Patch update asset tags, Delete remove the current api key, Get api key details, Patch rotate the api key secret and return the updated key, Get all services, Delete remove a service, Get service details, Get all sites, Put create a new site, Delete remove a site and associated assets, Get site details, Patch update a site definition, Put import a scan data file into a site, Put import a nessus scan data file into a site, Put create a scan task for a given site, Get all tasks last 1000, Get task details, Patch update task parameters, Get returns a temporary task change report data url, Get returns a temporary task scan data url, Post signal that a completed task should be hidden, Get returns a temporary task log data url, Post signal that a task should be stopped or canceledthis will also remove recurring and scheduled tasks, Get all wireless lans, Delete remove a wireless lan, Get wireless lan details |
| Public | Get returns latest agent version, Get returns latest platform version, Get returns latest scanner version |

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
