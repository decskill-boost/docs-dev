---
sidebar_position: 2
title: AWS Guide
description: Amazon Web Services best practices and guides
---

# AWS Guide

Best practices for working with Amazon Web Services.

## Core Services

### EC2 (Elastic Compute Cloud)

```bash
# Launch instance with AWS CLI
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t3.micro \
  --key-name MyKeyPair
```

**Best Practices:**
- Use latest generation instance types
- Enable detailed monitoring
- Use instance profiles for IAM

### S3 (Simple Storage Service)

```bash
# Create bucket
aws s3 mb s3://my-bucket-name

# Sync local folder
aws s3 sync ./local-folder s3://my-bucket-name
```

**Best Practices:**
- Enable versioning for important data
- Use lifecycle policies
- Block public access by default

### Lambda

```javascript
export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
```

**Best Practices:**
- Keep functions focused
- Optimize cold start times
- Use environment variables for config

## Security

### IAM Best Practices

1. Enable MFA for all users
2. Use roles instead of long-term credentials
3. Apply least privilege principle
4. Regular access reviews

### VPC Security

- Use private subnets for databases
- Implement security groups properly
- Enable VPC Flow Logs
- Use NAT Gateways for outbound traffic

## Cost Management

| Strategy | Savings |
|----------|---------|
| Reserved Instances | Up to 72% |
| Spot Instances | Up to 90% |
| Savings Plans | Up to 66% |
| Right-sizing | Varies |

## Useful Commands

```bash
# List all EC2 instances
aws ec2 describe-instances

# Get current AWS account ID
aws sts get-caller-identity

# List S3 buckets
aws s3 ls
```
