---
title: "Marquee"
date: 2026-04-15
draft: false
description: "Demonstration of the marquee shortcode"
summary: "Showcase an infinite scrolling banner of items such as tech stacks, sponsors, or partner logos."
tags: ["shortcodes", "marquee"]
---

## Basic Usage

A simple marquee scrolling left at default speed:

{{< marquee >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" >}}Go{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" >}}Python{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" >}}Docker{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" >}}Linux{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" >}}Git{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" >}}Kubernetes{{< /marquee-item >}}
{{< /marquee >}}

## Custom Speed & Direction

Scrolling right at a slower pace:

{{< marquee speed="60" direction="right" >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" >}}Rust{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" >}}TypeScript{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" >}}React{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" >}}Next.js{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" >}}PostgreSQL{{< /marquee-item >}}
{{< /marquee >}}

## With Links

Items can link to external pages:

{{< marquee speed="35" >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" href="https://github.com" >}}GitHub{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" href="https://gitlab.com" >}}GitLab{{< /marquee-item >}}
  {{< marquee-item icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" href="https://bitbucket.org" >}}Bitbucket{{< /marquee-item >}}
{{< /marquee >}}

## Text Only (No Icons)

{{< marquee speed="30" label="Partner list" >}}
  {{< marquee-item >}}Acme Corp{{< /marquee-item >}}
  {{< marquee-item >}}Globex Inc{{< /marquee-item >}}
  {{< marquee-item >}}Initech{{< /marquee-item >}}
  {{< marquee-item >}}Umbrella Corp{{< /marquee-item >}}
  {{< marquee-item >}}Stark Industries{{< /marquee-item >}}
{{< /marquee >}}
