# react-allpages

react-allpages is an package for ReactJS. Here the login page and register page can be developed without any boilerplate code.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-allpages.

```bash
npm install react-allpages
```

## Usage

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
