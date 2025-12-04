---
sidebar_position: 3
title: Azure Guide
description: Microsoft Azure best practices and guides
---

# Azure Guide

Best practices for working with Microsoft Azure.

## Core Services

### App Service

```bash
# Create web app
az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name myUniqueAppName \
  --runtime "NODE:18-lts"
```

**Best Practices:**
- Use deployment slots for zero-downtime
- Enable Application Insights
- Configure auto-scaling rules

### Azure Functions

```csharp
[FunctionName("HttpTrigger")]
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequest req,
    ILogger log)
{
    log.LogInformation("C# HTTP trigger function processed a request.");
    return new OkObjectResult("Hello from Azure Functions");
}
```

**Best Practices:**
- Use Durable Functions for orchestration
- Implement proper error handling
- Monitor with Application Insights

### Azure SQL Database

```bash
# Create SQL server
az sql server create \
  --name myserver \
  --resource-group myResourceGroup \
  --location westeurope \
  --admin-user adminuser \
  --admin-password SecurePassword123!
```

## Security

### Azure AD Best Practices

1. Enable Conditional Access
2. Use Managed Identities
3. Implement PIM for admin roles
4. Regular access reviews

### Network Security

- Use Network Security Groups
- Implement Azure Firewall
- Enable DDoS Protection
- Use Private Endpoints

## DevOps Integration

### Azure DevOps Pipelines

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '18.x'

  - script: |
      npm install
      npm run build
    displayName: 'Build'

  - task: AzureWebApp@1
    inputs:
      azureSubscription: 'MySubscription'
      appName: 'myUniqueAppName'
```

## Useful Commands

```bash
# Login to Azure
az login

# List subscriptions
az account list

# Set subscription
az account set --subscription "MySubscription"

# List resource groups
az group list
```
