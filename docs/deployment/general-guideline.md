

# Git Guidelines

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Basic Concepts](#basic-concepts)
- [Important Commands](#important-commands)
- [Branch Naming Standards](#branch-naming-standards)
- [Workflow](#workflow)
- [Collaboration](#collaboration)
- [Tips and Best Practices](#tips-and-best-practices)

## Introduction

This repository serves as a comprehensive guide to using Git, a distributed version control system, to manage and collaborate on your projects. Git allows you to track changes in your codebase, coordinate work with others, and maintain a history of your project's development.

## Getting Started

### Installation

- Download and install Git from the official website: [Git Downloads](https://git-scm.com/downloads)

### Configuration

- Set your username and email address:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## Basic Concepts

### Repository

A Git repository, often referred to as a "repo," is a folder that contains all the project's files, history, and configuration. To create a new repository, use `git init`.

### Commit

A commit represents a snapshot of your project at a particular point in time. Commits store changes to files, a message describing the changes, and a unique identifier.

### Branch

Branches in Git allow you to work on different features, bug fixes, or experiments independently. The main branch is typically named `main` or `master`.
![image](https://github.com/decskill-boost/.github/assets/78824435/930e288c-6f73-4677-9c7a-8d228af5f88a)


### Remote

A remote is a Git repository that exists on another server or location. You can push changes to and pull changes from remotes.

## Important Commands

Here are some essential Git commands:

- `git init`: Create a new Git repository.
- `git clone <repository-url>`: Clone an existing repository.
- `git add <file>`: Stage changes for the next commit.
- `git commit -m "Commit message"`: Create a new commit with staged changes.
- `git status`: Check the status of your working directory.
- `git log`: View the commit history.
- `git branch`: List all branches.
- `git checkout <branch>`: Switch to a different branch.
- `git pull`: Fetch changes from a remote repository.
- `git push`: Push your changes to a remote repository.
- `git merge <branch-name>`: after resolving merge conflicts the command blends selected branch into the current branch.

## Branch Naming Standards

Adhering to consistent branch naming standards can help keep your Git repository organized. Here are some common standards:

- `main` or `master`: The primary branch, where the stable and production-ready code resides.
- `feature/feature-name`: For new features.
- `bugfix/bug-description`: For bug fixes.
- `hotfix/hotfix-description`: For urgent fixes in production.
- `release/version-number`: For release preparations.
- `chore/task-name`: For miscellaneous tasks.

![gitworkflow](https://github.com/decskill-boost/.github/assets/78824435/646c8a6a-05a2-4302-868f-c43df02585a4)

## Workflow

1. Create a new branch for your work using `git checkout -b branch-name`.
2. Make changes to your code, commit them, and push the branch to the remote repository.
3. Create a pull request (PR) for code review.
4. Once the PR is approved, merge it into the main branch.
5. Delete the feature branch (if it's no longer needed).
6. Periodically update your local repository with changes from the main branch using `git pull`.




## Collaboration

Git is designed for collaboration. Multiple developers can work on a project simultaneously. You can collaborate effectively by:

- Creating feature branches and making pull requests.
- Reviewing and discussing code in pull requests.
- Resolving conflicts when merging branches.
- Communicating with your team to avoid overwriting each other's work.

# Git Rollback Guide

This guide provides instructions on how to perform a rollback using Git. A rollback is useful when you need to revert to a previous commit due to issues or unexpected behavior.

## Steps to Rollback

### 1. Identify the Commit to Rollback To

Use the following command to view the commit history:

```bash
git log
```
Identify the commit hash or tag to which you want to rollback.

```bash
git revert <commit_hash>
```
This creates a new commit that undoes the changes introduced in the specified commit.

If the changes are already pushed to the remote repository, you need to push the changes after the rollback:

```bash
git push origin <branch_name>
```

Replace branch_name with the name of your branch.

If you want to completely remove the commits after the specified commit, you can use the git reset command. Be cautious, as this will rewrite history.

```bash
git reset --hard <commit_hash>
git push origin -f <branch_name>
```

#### Important Notes:
- Make sure to communicate the rollback to your team.
- Be cautious when using git reset --hard, as it can lead to irreversible changes.
- Always create a backup branch or tag before performing a rollback.

## Tips and Best Practices

- Write meaningful commit messages that explain the purpose of each change.
- Commit frequently, but keep commits focused on specific changes.
- Use branches to isolate different tasks and features.
- Keep your repository clean by regularly deleting merged and unnecessary branches.
- Periodically update your repository from the main branch to avoid merge conflicts.

For more advanced Git workflows and best practices, explore the [Git documentation](https://git-scm.com/doc) and refer to specific use cases in your projects.

Happy coding and collaborating with Git!