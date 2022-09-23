import './App.css';
import { useEffect, useState }  from 'react';
import jwt_decode from 'jwt-decode';

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    var userObject  = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById('my-signin').hidden = true;
  }

  function handleSignOut(e) {
    e.preventDefault();
    const google = window.google;
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke();
    setUser({});
    document.getElementById('my-signin').hidden = false;
  }
  useEffect (() => {
    const google = window.google;

    google.accounts.id.initialize({
      client_id: '',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('my-signin'),
      { theme: 'dark', size: 'large' }
    );

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="my-signin"></div>
      {
        Object.keys(user).length > 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      {user &&
        <div>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );
}

export default App;
