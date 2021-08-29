
import React, { Component } from "react";
import { Link} from "react-router-dom";
export default class Navbar extends Component {
  logout = () =>{
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div class="d-grid gap-2 d-md-block">
              <Link to="/login">
                <button class="btn btn-primary " type="button">
                  Login
                </button>
              </Link>

              <button class="btn btn-primary" type="button" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
