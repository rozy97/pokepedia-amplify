import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <Redirect to="/login" />
      // <div id="landing">
      //   <div style={{ height: "75vh" }} className="container valign-wrapper">
      //     <div className="row">
      //       <div className="col s12 center-align">
      //         <h4>
      //           <b>Register</b> or <b>Login</b> to browse{" "}
      //           <span style={{ fontFamily: "monospace" }}>POKEMON</span>{" "}
      //           character
      //         </h4>
      //         {/* <p className="flow-text grey-text text-darken-1">
      //           Create a (minimal) full-stack app with user authentication via
      //           passport and JWTs
      //         </p> */}
      //         <br />
      //         <div className="col s6">
      //           <Link
      //             to="/register"
      //             style={{
      //               width: "140px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px"
      //             }}
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Register
      //           </Link>
      //         </div>
      //         <div className="col s6">
      //           <Link
      //             to="/login"
      //             style={{
      //               width: "140px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px"
      //             }}
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Log In
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default Landing;
