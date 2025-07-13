# Team-12-UniLend

## Welcome to our UniLend app

A peer-to-peer items lending platform for universities

## Tech Stack

**Frontend (Mobile)**

- React Native with Expo framework
- `react-native-firebase` for connecting with firebase
- `zod` for form validation
- `"@futurejj/react-native-checkbox"` checkbox component

(**NOTE:** We are using firebase-auth for authentication and firestore for storing user data)

**Backend (For signing signatures for cloudinary):**

- Node.js
- Express.js
- Typescript
- `firebase` admin sdk
- Cloudinary Admin API

**Role:** The backend is used for signing signatures for frontend, to upload images in cloudinary

## Prerequisites

- Node.js (Latest version)
- npm
- Firebase account (if using Firebase)
- Expo account (required if using eas builds)
- Cloudinary account (required for image storage)

## Installation

### Clone the repo

```bash 
git clone https://github.com/Manik2375/Team-12-UniLend
cd Team-12-UniLend
```


### Frontend setup

There are 2 ways to run the app. You can either run it in emulator like *Android Studio* or use expo *development build*.

**NOTE:** We can't run the application in expo go, because `react-native-firebase` uses native modules, which are not present in expo go

Learn more about development build: [https://docs.expo.dev/develop/development-builds/introduction/](https://docs.expo.dev/develop/development-builds/introduction/)

To install packages:
 ```bash
 # run at root directory
npm install
```

Now, you have to create a build to run the app. You can either:

- Build locally: [https://docs.expo.dev/guides/local-app-development/](https://docs.expo.dev/guides/local-app-development/)

- Build using EAS build: [http://docs.expo.dev/tutorial/eas/configure-development-build/](http://docs.expo.dev/tutorial/eas/configure-development-build/) (We are focusing on eas build for development in your smartphone)

When using EAS build, install the development app in your mobile.


After build is done, run
```bash
# Start expo 
npm run start
``` 

**NOTE:** If using eas build, you can use your mobile native scanner app to scan the QR code to start development.


### Backend Setup

If expo is currently running, then open a new terminal and

1. Go the backend directory
```bash
cd backend
```
2. Install required dependencies
```bash
npm install
```
3. Go back to root directory
```bash
cd ../
```

4. Use `npm run serverStart` to start backend server

**NOTE:** If you are using EAS build for developing (in your mobile), we need to change the ip address used in fetch calls. If you are using windows run `ipconfig` to get your local IP address and paste it in [src/api/cloudinary/upload.ts](src/api/cloudinary/upload.ts) `signatureResponse` call. (In Linux you can use `ip addr` command)


## Required secret files

For firebase in our frontend application, we require `google-services.json`. 

In backend, for firebase-admin-sdk we need `service-account-key` JSON file. 

And for rest, the structure of `.env` file 

```env
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

NODE_ENV="development"
```

### Endpoints in backend 

- `GET /` - Home page, nothing special other than greeting
- `GET /get-signature` - Get cloudinary upload signature