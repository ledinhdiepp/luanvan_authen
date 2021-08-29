import React, { Component } from "react";
import "../styles/Auth/login.css";
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isshowpassword: false,
    };
  }

  handleEmail = (e) => {
    this.setState({
     email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      identifier: this.state.email,
      password: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:1337/auth/local", requestOptions)
      .then((response) =>{
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result)
        localStorage.setItem("accessToken", result.jwt);
        alert("thanh cong");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("error", error);
        alert("Username, password is wrong");
      });
  };

  handleisshowpassword = () => {
    this.setState({
      isshowpassword: !this.state.isshowpassword,
    });
  };
  render() {
    return (
      <div className="main">
        <form
          method="POST"
          className="form"
          id="form-1"
          
        >
          <h3 className="heading">Form Login</h3>
          <p className="desc">❤️</p>
          <div className="spacer" />
          {/* <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Tên đầy đủ
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="VD: Hoàng Thuận"
              className="form-control"
            />
            <span className="form-message" />
          </div> */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: ABC@gmail.com"
              className="form-control"
              onChange={(e) => this.handleEmail(e)}
            />
            <span className="form-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type={this.state.isshowpassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="form-control"
              onChange={(e) => this.handlePassword(e)}
            />
            <span
              className="showpassword"
              onClick={() => this.handleisshowpassword()}
            >
              <i
                className={
                  this.state.isshowpassword ? "far fa-eye" : "far fa-eye-slash"
                }
              ></i>
            </span>
            <span className="form-message" />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label">
              Nhập lại mật khẩu
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Nhập lại mật khẩu"
              type="password"
              className="form-control"
            />
            <span className="form-message" />
          </div> */}
          <div className="porgotpassword">
            <p>Quên mật khẩu?</p>
          </div>
          <button
              className="form-submit"
              onClick={this.handleLogin}
          >Đăng Nhập</button>

          <div className="dk">
            <p className="textdk">Bạn chưa có tài khoản?</p>
            <Link to="/register">
              <p className="linkdk">Đăng ký ngay</p>
            </Link>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
