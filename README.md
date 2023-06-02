<img src="https://img.shields.io/badge/Node-v18.8.0-green"/> <img src="https://img.shields.io/badge/Javascript-ES6-yellow"/> <img src="https://img.shields.io/badge/React-v18.2.0-blue"/> <img src="https://img.shields.io/badge/HTML-5-orange"/> <img src="https://img.shields.io/badge/CSS-3-purple"/> 

# Authentication with the Google OAuth API 
The goal of this project is to develop a form that utilizes the Google API for user authentication. To use this React web application, you will need to create your own credentials on [Google Cloud](https://developers.google.com/workspace/guides/create-credentials).

<img src="https://github.com/andre-moura/login-google-auth/blob/master/src/assets/img/login-google-auth.png?raw=true" />

# How to get started

Clone the repository
```bash
git https://github.com/andre-moura/login-google-auth.git
```

Download the libraries and dependencies
```bash
npm i
```

## Set your API Token and start application

**Windows (cmd.exe)**
```bash
set "REACT_APP_API_KEY=YourSecretKey" && npm start
```

**Windows (Powershell)**
```bash
($env:REACT_APP_API_KEY = "YourSecretKey") -and (npm start)
```

**Linux, macOS (Bash)**
```bash
REACT_APP_API_KEY=YourSecretKey npm start
```
**Open [http://localhost:3000](http://localhost:3000) to view it in your browser.**
