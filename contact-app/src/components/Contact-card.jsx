import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';
function ContactCard(props){
    const contact = props.contact;
    return (
        <div className='item'>
        <img className="ui avatar image" src={user} alt="user"/>
                    <div className='content'>
                    <Link to={{pathname:'/contacts/'+contact.id , state:{contact:props.contact}}}>
                        <div className='header'>
                            {contact.name}
                        </div>
                        <div className='header'>
                            {contact.email}
                        </div>
                        </Link>
                        <i onClick = {()=>{props.clickHandler(contact.id)}} className='trash alternate outline icon' style={{color:"red", marginTop: "7px", marginLeft:"10px"}}></i>
                        <Link to={{pathname:'/edit' , state:{contact:props.contact}}}>
                        <i className='edit alternate outline icon' style={{color:"blue", marginTop: "7px"}}></i>
                        </Link>
                    </div>
                </div>
    );
}
export default ContactCard;