<img src="https://img.shields.io/badge/Node-v18.8.0-green"/> <img src="https://img.shields.io/badge/Javascript-ES6-yellow"/> <img src="https://img.shields.io/badge/React-v18.2.0-blue"/> <img src="https://img.shields.io/badge/HTML-5-orange"/> <img src="https://img.shields.io/badge/CSS-3-purple"/> 

# Authentication with the Google OAuth API 
To use this reaction web app, you will need to create your own credential on [Google Cloud](https://developers.google.com/workspace/guides/create-credentials).
<img src="https://raw.githubusercontent.com/andre-moura/login-google-auth/master/src/assets/img/loginForm.png?token=GHSAT0AAAAAABX3KKTG3FKORDPME754WDKIYZOICGQ"></img>
The objective of this project is to create a form capable of using the API provided by Google to authenticate a user. 


## Built using:

- Node
- Javascript
- React
- HTML
- CSS

## How to get started

Clone the repository
```bash
git https://github.com/andre-moura/login-google-auth.git
```

Download the libraries and dependencies
```bash
npm i
```

Replace the Google API credential located on line 25 of [LoginForm.js](https://github.com/andre-moura/login-google-auth/blob/master/src/components/LoginForm.js)
```bash
google.accounts.id.initialize({
    client_id: 'Google API credential',
    callback: handleCallbackResponse
  });
```

Run the application in the development mode
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
