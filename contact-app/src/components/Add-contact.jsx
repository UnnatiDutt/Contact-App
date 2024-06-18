import React from 'react';
class Addcontact extends React.Component{
    state={
        name:"",
        email:""
    }
    add=(e)=>{
        e.preventDefault();
        if((this.state.name==="")||(this.state.email===""))
        {
            alert("All fields are mandatory!");
            return;
        }
        else
        {
            this.props.Addcontacthandler(this.state);
            this.setState({name:"",email:""});
            this.props.history.push("/");
        }
    }
    render(){
        return (
            <div className='ui main'>
            <br/>
                <h3>Add Contact</h3>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='name' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    <div className='field'>
                        <label>email</label>
                        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <button className='ui button blue' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
export default Addcontact;