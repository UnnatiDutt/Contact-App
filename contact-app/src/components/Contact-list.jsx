import React,{useRef} from 'react'
import {Link} from 'react-router-dom';
import ContactCard from './Contact-card.jsx';
function Contactlist(props){
    // console.log(props);
    const deleteContact=(id)=>{
        props.getContactId(id);
    }
    const rendercontactlist = ((props.contacts).map((contact)=>{
            return (
                <ContactCard key = {contact.id} contact={contact} clickHandler = {deleteContact}/>
            )
        }));
    const inputEl = useRef("");
    const getSearchTerm = ()=>{
        // console.log(inputEl.current.value);
        props.searchKeyword(inputEl.current.value);
    }
    return (
        <div className='main'>
        <br/>
        <h2>Contact List
        <Link to='/add'><button className='ui button blue right'>Add Contact</button></Link>
        </h2>
        <div className='ui search'>
            <div className='ui icon input'>
                <input ref={inputEl} type='text' placeholder='Search Contacts' className='prompt' value={props.term} onChange={getSearchTerm}/>
                <i className='search icon'/> 
            </div>
        </div>
        <div className='ui celled list'>
            {rendercontactlist.length>0 ? rendercontactlist : "No contacts available"}
        </div>
        </div>
    );
    }
export default Contactlist;