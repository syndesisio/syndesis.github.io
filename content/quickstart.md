---
bref: ""
date: 2017-05-16T15:58:18+01:00
description: ""
draft: false
menu:
  sidenav:
    pre: <i class='fa fa-fw fa-rocket'></i>
    weight: -200
  topnav:
    name: quickstart
    identifier: quickstart
    weight: -200
sidebar: sidenav
title: "Quickstart"
toc: true
weight: 20
---

We aim to make it as simple as possible for users to try out Syndesis. If you want to try out locally on your laptop, follow the [Using Minishift]({{< relref "#using-minishift" >}}) instructions.

- - -

## Using Minishift

Minishift is a tool that helps you run OpenShift locally by running a single-node OpenShift cluster inside a VM locally. With Minishift you can easily try out Syndesis without requiring a "real" cluster or servers, a laptop will suffice.

### Prerequisites

#### Minishift itself

You're going to need a working Minishift installation, which is really easy. If you haven't got Minishift already installed, please follow the [Minishift installation documentation](https://docs.openshift.org/latest/minishift/getting-started/installing.html).

Fire up Minishift if it's not already running. You need to add some memory, 4192 or more is recommended, and allocate a couple of CPUs:

```bash
$ minishift start --memory 4192 --cpus 2
```

Tip: If you want to switch the OpenShift config permanently use:

```bash
$ minishift config set memory 4192
$ minishift config set cpus 2
```

#### GitHub registered application

You also need a GitHub application registered at https://github.com/settings/developers. While registering, you'll need to provide a callback URL. The callback URL will be the output of:

```bash
$ echo https://syndesis.$(minishift ip).xip.io
```

Once you have registered the application, you will get a `<GITHUB_CLIENT_ID>` and a `<GITHUB_CLIENT_SECRET>`. These should be used in the commands below.

### Template selection

Deploying Syndesis is made easy thanks to [OpenShift templates](https://docs.openshift.org/latest/dev_guide/templates.html).The template to use in the installation instructions depend on your use case:

* **Developer** : Use the template [`syndesis-dev`](https://raw.githubusercontent.com/syndesisio/syndesis-openshift-templates/master/syndesis-dev.yml) which directly references Docker images without image streams. Then when before building you images e.g. with `mvn fabric8:build` set your `DOCKER_HOST` envvar to use the Minishift Docker daemon via `eval $(minishift docker-env)`. After you have created a new image you simply only need to kill the appropriate pod so that the new pod spinning up will use the freshly created image.

* **Tester** / **User** : In case you only want to have the latest version of Syndesis on your local Minishift installation, use the template [`syndesis`](https://raw.githubusercontent.com/syndesisio/syndesis-openshift-templates/master/syndesis.yml) which uses image stream referring to the published Docker Hub images. Minishift will update its images and trigger a redeployment when the images at Docker Hub changes. Therefor it checks every 15 minutes for a changed image. You do not have to do anything to get your application updated, except for waiting on Minishift to pick up new images.

Depending on your role please use the appropriate template in the instructions below.

### Deployment instructions

Set your GitHub credentials from your [registered app]({{< relref "#github-registered-application" >}}) in your shell:

```bash
$ export GITHUB_CLIENT_ID=...
$ export GITHUB_CLIENT_SECRET=...
```

Install the OpenShift template (syndesis-dev.yml or syndesis.yml as discussed [above]({{< relref "#template-selection" >}})):

```bash
$ oc create -f https://raw.githubusercontent.com/syndesisio/syndesis-openshift-templates/master/syndesis-dev.yml
```

Deploy syndesis using the following command, replacing "syndesis-dev" with "syndesis" depending on the template
you have just installed:

```bash
$ oc login -u system:admin
$ oc new-app syndesis-dev \
    -p ROUTE_HOSTNAME=syndesis.$(minishift ip).xip.io \
    -p OPENSHIFT_MASTER=$(oc whoami --show-server) \
    -p GITHUB_OAUTH_CLIENT_ID=${GITHUB_CLIENT_ID} \
    -p GITHUB_OAUTH_CLIENT_SECRET=${GITHUB_CLIENT_SECRET} \
    -p INSECURE_SKIP_VERIFY=true
```

Wait until all pods are running:

```bash
$ watch oc get pods
```

You should now be able to open `https://syndesis.$(minishift ip).xip.io` in your browser.

- - -
