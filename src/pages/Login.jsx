import Google from "../img/google_icon.png";
import Facebook from "../img/facebook_icon.png";
import Github from "../img/github_icon.png";

export const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Lgin Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Password" />
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
