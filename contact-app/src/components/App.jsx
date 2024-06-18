import React,{useState,useEffect} from "react";
import Header from "./Header.jsx";
import Addcontact from "./Add-contact.jsx";
import Contactlist from "./Contact-list.jsx";
import Contactdetails from './contact-details.jsx';
import Editcontact from './Edit-contact.jsx';
import api from "../api/contacts.js"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
function App() {
  // const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts]=useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResults,setsearchResults] = useState([]);
  const retrieveContacts = async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }
  const updatecontacthandler = async (contact) =>{
    const response = await api.put('/contacts/'+contact.id, contact);
    // console.log(response.data);
    const {id,name,email} = response.data;
    setContacts(contacts.map((contact)=>{
      return ((contact.id === id)?(response.data):contact);
    }));
  };
  async function Addcontacthandler(contact){
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts",request);
    setContacts([...contacts,response.data]);
    // setContacts([...contacts,{id: uuidv4(),name:contact.name,email:contact.email}]);
  }
  const removeContactHandler = async (id)=>{
    await api.delete("/contacts/"+id);
    const newContacts = contacts.filter((contact)=>{
      return (contact.id!==id);
    });
    setContacts(newContacts);
  }
  const searchHandler = (searchTerm)=>{
    console.log(searchTerm);
    setsearchTerm(searchTerm);
    console.log(contacts);
    if(searchTerm!== "")
    {
      const newcontactlist = contacts.filter((contact)=>{
        // console.log(Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase));
        return (Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
      });
      console.log(newcontactlist);
      setsearchResults(newcontactlist);
    }
    else
    {
      searchResults(contacts);
    }
  } 
  useEffect(()=>{
    // const retrievedcontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // setContacts(retrievedcontacts);
    const getAllContacts = async ()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[]);
  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  
  return (
    <div className="ui container">
    <Router>
    <Header/>
    <Switch>
    <Route 
    path="/" 
    exact 
    render={(props)=>{
      return (<Contactlist
        {...props}
        contacts={(searchTerm.length < 1) ? contacts:searchResults}
        getContactId={removeContactHandler}
        term = {searchTerm}
        searchKeyword={searchHandler}
      />)
    }}/>
    <Route 
    path="/add"  
    render={(props)=>{
    return (<Addcontact
    {...props}
    Addcontacthandler={Addcontacthandler}
    />)
    }}
    />
    <Route
    path="/contacts/:id"
    component={Contactdetails}
    />
    <Route 
    path="/edit"  
    render={(props)=>{
    return (<Editcontact
    {...props}
    updatecontacthandler={updatecontacthandler}
    />)
    }}
    />
   {/* <Addcontact Addcontacthandler={Addcontacthandler}/> */}
   {/* <Route path='/contacts' component={()=>{
    return <Contactlist contacts={contacts} getContactId={removeContactHandler}/>
   }}/> */}
  {/* <Contactlist contacts={contacts} getContactId={removeContactHandler}/>  */}
  </Switch>
  </Router>
  </div>
  );
}
export default App;
