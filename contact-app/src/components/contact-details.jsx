import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';
function Contactdetails(props){
    const {name,email} = props.location.state.contact;
    // const contact = props.contact;
    return (
        <div className="main">
        <br/>
            <div className="image">
            <br/>
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div className="description">
                    {email}
                </div>
                <div>
                    <div className="center-div">
                        <Link to={{pathname:"/"}}>
                        <button className="ui button blue center">
                            Back
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contactdetails;