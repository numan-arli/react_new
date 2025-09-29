
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import * as authActions from "../../redux/actions/authActions";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user, error } = useSelector((state) => state.authReducer1);

  useEffect(() => {
  console.log(" login açılış")
  // cleanup
  return () => {
   debugger;
    console.log("cleaning login")
  } 
}, [isLoggedIn,user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // login olduysa dashboard'a yönlendir
  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoggedIn ? (
        <div>
          <p>Hoşgeldin {user?.username}</p>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Kullanıcı Adı"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}






/*
import React, { Component } from "react";

//import { login } from "../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import {Link} from "react-router-dom"

import { connect } from "react-redux";
import { withNavigation } from "./withNavigation"; // helper'ı import et
import {Badge, Table,Button,Form,FormGroup,Label,Input} from "reactstrap"
import './Login.css';

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

   componentWillUnmount() {
    debugger;
    console.log("login page kapanıyor"); // Unmount
  }
    componentDidUpdate(prevProps) {
      debugger;
    // Login state değiştiğinde yönlendir
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.navigate("/dashboard");
    }
  }

  handleChange = (event) => {
    debugger;
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    debugger;
  //  const { username, password } = this.state;
  const username = this.state.username;
  const password = this.state.password;
    this.props.actions.login(username, password);
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
       <Form>
  <FormGroup>
    <Label
      for="username"
      hidden
    >
      User Name
    </Label>
    <Input
      id="username"
      name="username"
      placeholder="username"
      type="text"
	  value={this.state.username}
      onChange={this.handleChange}
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="Password"
      hidden
    >
      Password
    </Label>
    <Input
      id="Password"
      name="password"
      placeholder="Password"
      type="password"
	  value={this.state.password}
      onChange={this.handleChange}
    />
  </FormGroup>
  {' '}
  <Button color="success" onClick={this.handleSubmit}>
    Giriş Yap
  </Button>
</Form>
        {this.props.error && <p style={{ color: "red" }}>{this.props.error}</p>}
        
        {this.props.isLoggedIn && this.props.user && (
          <p>Hoşgeldin {this.props.user.username}</p>
        )}

      </div>
    );
  }
}

// Redux state -> props
function mapStateToProps(state) {
  debugger;
  return {
  
    isLoggedIn: state.authReducer1.isLoggedIn,
    user: state.authReducer1.user,
    error: state.authReducer1.error
  };
}



function mapDispatchToProps(dispatch){ 
    debugger;
    return {
    actions :
    {
      
        login: bindActionCreators(authActions.login,dispatch),
       
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(LoginPage));

*/




/*
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  // Redux state'ten login durumunu al
  const { isLoggedIn } = useSelector((state) => state.auth);

  // Login başarılı olursa yönlendir
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");  // ✅ Dashboard sayfasına yönlendir
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2>Login</h2>
     

export default LoginPage;

*/






/*

import React from "react";
import { connect } from "react-redux";
import { login } from "./authActions";

class LoginPage extends React.Component {
  state = { username: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        {this.props.error && <p style={{ color: "red" }}>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(LoginPage);
*/