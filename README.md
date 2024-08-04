## SHOP NOW

# Contents

## :point_right: :point_right: :point_right: :point_right: INDEX :point_left: :point_left: :point_left: :point_left:

1. [Overview](#overview)
2. [Description](#description)
3. [Port Required](#port-required)
4. [Installation & Start app](#installation-startup)

## Overview

This is a React application built with a Micro Frontend architecture. It utilizes Material-UI (MUI) for UI components, TypeScript for strong typing, Redux Toolkit for state management, and i18n for internationalization and translation. The architecture allows for modular development, making the app scalable and maintainable.

## Description

This is a mini shopping application that allows users to log in using either a system account or Google authentication. The app supports multiple languages, including English and Arabic, providing a seamless shopping experience for a diverse user base. The application is built with a modern tech stack, including React, TypeScript, MUI, and Redux Toolkit, and follows a Micro Frontend architecture for modularity and scalability. It also integrates i18n for smooth and efficient translation between languages.

## Ports required

| Ports required | Is required for app |
| -------------- | ------------------- |
| 3000           | Host                |
| 3001           | Auth                |
| 3002           | Store               |
| 3003           | Product             |

## Installation & Start app

### :point_right: Local setup

1. Install latest node js based on your operating system

2. Clone from git repository

```
git clone https://github.com/nighilramachandran/micro-mui.git`
```

```
NOTE: Please run the host app after you start all the remaining apps;

```

### :point_right: Running the applications

1. Navigate into the folder
   `cd micro-mui`

#### Running the Store app

1. Open a new terminal
   `cd store`

2. Install packages

```
npm install
```

3. Run the project

```
npm start
```

:rocket: :rocket: The application start on localhost:3002 :rocket: :rocket:

#### Running the Auth app

1. Open a new terminal
   `cd auth`

2. Install packages

```
npm install
```

3. Run the project

```
npm start
```

:rocket: :rocket: The application start on localhost:3001 :rocket: :rocket:

#### Running the Product app

1. Open a new terminal
   `cd product`

2. Install packages

```
npm install
```

3. Run the project

```
npm start
```

:rocket: :rocket: The application start on localhost:3003 :rocket: :rocket:

#### Running the Host app

1. Open a new terminal
   `cd host`

2. Install packages

```
npm install
```

3. Run the project

```
npm start
```

:rocket: :rocket: The application start on localhost:3000 :rocket: :rocket:
