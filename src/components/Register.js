import React, { Component } from "react";
import "../styles/Auth/register.css";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
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
  handleConfirm = (e) => {
    this.setState({
      confirmpassword: e.target.value,
    });
    console.log(e.target.value);
  };
  handleusername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleRegister = () => {
    
  };

  handleisshowpassword = () => {
    this.setState({
      isshowpassword: !this.state.isshowpassword,
    });
  };
  render() {
    return (
      <div className="main">
        <form method="POST" className="form" id="form-1">
          <h3 className="heading">Đăng ký thành viên</h3>
          <p className="desc">❤️</p>

          <div className="spacer" />
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Tên đầy đủ
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="VD: Hoàng Thuận"
              className="form-control"
              onChange={(e) => this.handleusername(e)}
            />
            <span className="form-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: abc@gmail.com"
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
          <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label">
              Nhập lại mật khẩu
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Nhập lại mật khẩu"
              type={this.state.isshowpassword ? "text" : "password"}
              className="form-control"
              onChange={(e) => this.handleConfirm(e)}
            />
            <span className="form-message" />
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
          </div>

          <button className="form-submit" onClick={() => this.handleRegister()}>
            Đăng ký
          </button>

          <div className="dn">
            Bạn đã có tài khoản?{" "}
            <Link to="/login">
              <a>Đăng nhập</a>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;
