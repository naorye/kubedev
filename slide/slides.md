---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./images/container-ship.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## KubeDev presentation slides.

  Source code at [github](https://github.com/naorye/kubedev)
# persist drawings in exports and build
drawings:
  persist: false
---

# KubeDev

An example of development and production flows of full stack application run on Kubernetes

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/naorye/kubedev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# What was my motivation?

I decided to dive into Kubernetes in development for several reasons

- Finding an ideal way to build complex app (microservices) as close as possible to production
- Learn Kubernetes
- Finding a way to develop multiple apps easily
- docker-compose requires to learn another set of configurations and it is kind of dead

---

# First things first

- Docker
- Kubernetes
- Developer happiness
- Environments

---

# Why do we need a tool like Docker?

- Familiar environment to make sure production is 100% fine ("past" vs today)
- Microservices: Different requirements for multiple apps
- When everything is configured correctly - easy start

---

# Why do we need a tool like Docker?

https://www.docker.com/why-docker

Developing apps today requires so much more than writing code. Multiple languages, frameworks, architectures, and discontinuous interfaces between tools for each lifecycle stage creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

---

# What is Docker and what it provides?

- A platform to create the minimum requirements to run an application
- A virtualization to deliver software in packages
- Containers via images
- Communication (networking)

---

# Creating our app

- We will create two apps kubedev-client and kubedev-server
- We will use Create React App and NestJS
- Our app requires database but dockerhub already includes postgres image

---

# Dockerize apps for production and development

- Create client development and production Dockerfile
- Create server development and production Dockerfile

---

# What is kubernetes?

- kubectl
- minikube

---

# Configure Kubernetes resources

- kubedev-client, kubedev-server and kubedev-postgres
- K8s resources: deployments, services, configs, volumes

---

# Development flow with Kubernetes

- Create app image
- Allocate resources according to configurations
- Create container from image
- Upon source change, recreate the image and propagate it to containers

---

# What is Skaffold?

https://skaffold.dev/

- Handles the workflow for building, pushing and deploying your application
- Focus on what matters most: writing code

---

# What is Kustomize?

https://kustomize.io/

- A way to customize application configuration
- Integrate with `kubectl apply -k`
