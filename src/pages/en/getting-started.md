---
title: Introduction
description: Docs intro
layout: ~/layouts/MainLayout.astro
setup: |
  import Badge from '~/components/Badge.astro';
  import Checklist from '~/components/Checklist.astro';
  import Box from '~/components/tutorial/Box.astro';
  import Lede from '~/components/tutorial/Lede.astro';
---

## **Guide - Conducting the Survey**
### Summary
This guide will explain how to perform the CI/CD survey.

### Requirements
:::note
note
:::

### Steps
1. 

---

## **List of Questions**
#### SCM
- Which source code tool is being used?
- Who has read access?
- Who has write accses?
- How is access provisioned and revoked?
- What branch protections do you use? Reviewers required?
- Do you use auto-merge?
- What is your update cadence for this tool?

#### CI
- Which CI tool is being used?
- Who has read access?
- Who has write accses?
- How is access provisioned and revoked?
- What is the update cadence for this tool?
- Is there an audit log?
- What 3rd party integrations are being used?

#### CD
- Which CD tool is being used?
- Who has read access?
- Who has write accses?
- How is access provisioned and revoked?
- How is this triggered?
- What is the update cadence for this tool?
- Is there an audit log?
- What 3rd party integrations are being used?

#### Artifact Repository
- Which CD tool is being used?
- Who has read access?
- Who has write accses?
- How is access provisioned and revoked?
- What is the update cadence for this tool?
- Is there an audit log?
- Is there a proxy used in pulling 3rd party dependencies?
- Is there artiface integrity validation?

#### Test Environments
- Who has read access?
- Who has write accses?
- How is access provisioned and revoked?
- What frequency are ephemeral environments wiped after deployment?
- What security measures do you have for these environments?

#### Secrets Management
- Where are secrets stored? 
  - SCM?
  - CI?
  - CD?
  - Application?
- How are they scoped? How is access provisioned and revoked?
- How are secrets rotated?
- How are secrets prevented from being pushed to SCM?
- Are secrets masked in your logs?

---

## **Check**
<Box icon="check-list">
<Checklist>
- [ ] Looks great! I'm ready to get started!
</Checklist>
</Box>

---

## **FAQ**