# kubedev
An example of development and production flows of full stack application run on Kubernetes

This repo includes two projects:
1. Client app based on CRA (https://github.com/facebook/create-react-app)
2. Server app based on NestJS (https://nestjs.com/)

Each project includes development and production Dockerfiles.

Inside `infra/k8s` you can find kubernetes configurations for development and production, built to be used with kustomize.

`skaffold.yaml` contains the magic that allows us to run build-push-deploy flow both in local and production.

## Install
1. Install Docker (https://docs.docker.com/get-docker/)
2. Install Skaffold (https://skaffold.dev/docs/install/)
3. Install Kustomize (https://kustomize.io/)

## Run
1. `skaffold dev --profile=development` will run the app in development mode using the current kubectl context
2. `skaffold run --profile=production --default-repo=gcr.io/$(gcloud config get-value project)` will deploy production to the current kubectl context
