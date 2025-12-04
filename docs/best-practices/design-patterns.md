---
sidebar_position: 3
title: Design Patterns
description: Common design patterns and when to use them
---

# Design Patterns

Design patterns are proven solutions to common software design problems.

## Creational Patterns

### Singleton
Use when you need exactly one instance of a class.

```javascript
class Database {
  static instance = null;

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```

### Factory
Use when you need to create objects without specifying the exact class.

```javascript
class NotificationFactory {
  create(type) {
    switch (type) {
      case 'email': return new EmailNotification();
      case 'sms': return new SMSNotification();
      case 'push': return new PushNotification();
    }
  }
}
```

## Structural Patterns

### Adapter
Use to make incompatible interfaces work together.

### Decorator
Use to add behavior to objects dynamically.

## Behavioral Patterns

### Observer
Use for event-driven systems where objects need to react to state changes.

### Strategy
Use when you need to switch between different algorithms at runtime.

## When to Use Patterns

| Pattern | Use When |
|---------|----------|
| Singleton | Single shared resource needed |
| Factory | Object creation logic is complex |
| Observer | Multiple objects react to changes |
| Strategy | Algorithm varies by context |

## Anti-Patterns to Avoid

- **God Object** - One class that does everything
- **Spaghetti Code** - Unstructured, tangled code
- **Copy-Paste Programming** - Duplicated code everywhere
