# react-allpages

react-allpages is an package for ReactJS. Here the login page, register page, Home page and other components can be developed without any boilerplate code.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-allpages.

```bash
npm install react-allpages
```

## Usage

### HomeOne

```python
import "./App.css";
import { HomeOne } from "react-allpages";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register"

function App() {
  const btn = [
    {
      name: "Login",
      color: "white",
      backgroundColor: "red",
      link: "/login",
    },
    {
      name: "Register",
      color: "white",
      backgroundColor: "red",
      link: "/register",
    },
  ];
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Login} />
      <HomeOne
        bgImage="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg"
        text="Welcome to react-allpages"
        buttons={btn}
      />
    </BrowserRouter>
  );
}

export default App;

```

<img src="https://user-images.githubusercontent.com/64951569/116524565-2835cb00-a8f5-11eb-90ee-7fed202fc959.png" width="500"></img>

### Button

```python
import "./App.css";
import { Button } from "react-allpages";

function App() {
  return (
    <div className="App">
      <Button
        text="Get Started"
        elevation={0.3}
        bgColor="green"
        color="white"
        onBtnClick={(e) => console.log("click")}
      />
    </div>
  );
}

export default App;

```

<img src="https://user-images.githubusercontent.com/64951569/116528178-2241e900-a8f9-11eb-85ce-b86ee30813fa.png" width="500"></img>

### RegisterPage

```python
import { RegisterPage } from "react-allpages";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fnm, setfnm] = useState("");
  const [lnm, setlnm] = useState("");
  const handleClick = () => {
    console.log(fnm, lnm, email, password);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <RegisterPage
        fnmValue={fnm}
        lnmValue={lnm}
        emailValue={email}
        passwordValue={password}
        fnmChange={(e) => setfnm(e)}
        lnmChange={(e) => setlnm(e)}
        emailChange={(e) => setEmail(e)}
        passwordChange={(e) => setPassword(e)}
        onBtnClick={handleClick}
      />
    </div>
  );
}
```

<img src="https://user-images.githubusercontent.com/64951569/116149661-0de6cc00-a700-11eb-9652-945bd2694f4e.png" width="500"></img>

### LoginPage

```python
import { LoginPage } from "react-allpages";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(email, password);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <LoginPage
        emailValue={email}
        passwordValue={password}
        emailChange={(e) => setEmail(e)}
        passwordChange={(e) => setPassword(e)}
        onBtnClick={handleClick}
      />
    </div>
  );
}

```

<img src="https://user-images.githubusercontent.com/64951569/116150227-bd23a300-a700-11eb-98e7-90c6da4b8a39.png" width="500"></img>

## License

[MIT](https://github.com/Akshit-Zatakia/react-allpages/blob/main/LICENCE)
