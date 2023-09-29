# Car rental React Native app

Car rental app, created in React Native.

## How to run

### Prerequisites

This application is built using Node JS and tested using Expo on mobile.

- Node
- NPM

The following elements are optional, depending on the platform:

- Expo go (IOS)
- Android Studio (Emulator)

### How to install dependencies

To install dependencies, please run the npm command:

```sh
npm install
```

### How to run

To run this, please run the following, which will start the Expo engine:

```sh
npm run start
```

This will launch the Expo application in the terminal, where it is possible to further interact with the Expo engine.  
Please note, that being on the same network is crucial if you want to use a phone and not an emulator.

The Expo application will display a url and a QR code, that can be scanned, to access the compiled version.

## Structure

The application is structured as follows in regards to folders:

- `assets` - contains all assets, such as images, fonts, etc.
- `src` - contains all source code
  - `components` - contains all components
    - `atoms` - contains all atoms - Most Generic UI elements Completely reusable components
    - `molecules` - contains all molecules - Specific components built with atoms
  - `screens` - contains all screens - High level pages/screens/components/, not intended for reusability
  - `utils` - contains all utilities, such as API calls, etc.

## Technology

The following tech stack is used:

- Node JS
- NPM
- Expo
- TypeScript
- React
- React Native
