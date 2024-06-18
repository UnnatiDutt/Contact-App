import React from 'react';
class Editcontact extends React.Component{
    constructor(props){
        super(props)
        const {id,name,email} = props.location.state.contact;
        this.state = {
            id:id,
            name: name,
            email: email,
        };
    }
    update=(e)=>{
        e.preventDefault();
        if((this.state.name==="")||(this.state.email===""))
        {
            alert("All fields are mandatory!");
            return;
        }
        else
        {
            this.props.updatecontacthandler(this.state);
            this.setState({name:"",email:""});
            this.props.history.push("/");
        }
    }
    render(){
        return (
            <div className='ui main'>
            <br/>
                <h3>Edit Contact</h3>
                <form className='ui form' onSubmit={this.update}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='name' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    <div className='field'>
                        <label>email</label>
                        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <button className='ui button blue' type='submit'>Update</button>
                </form>
            </div>
        )
    }
}
export default Editcontact;