import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            addres: "",
            phone: "",
            id: ""
        }
        this.handleidChange = this.handleidChange.bind(this);
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handleaddresChange = this.handleaddresChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleidChange(event) {
        this.setState({ id: event.target.value });
    }

    handlenameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleaddresChange(event) {
        this.setState({ addres: event.target.value });
    }
    handlephoneChange(event) {
        this.setState({ addres: event.target.value });
    }
    handleSubmit(event) {
        if (this.state.id && this.state.name && this.state.addres && this.state.phone) {
            this.props.postUser(this.state.id, this.state.name, this.state.addres, this.state.phone)
            this.setState({ id: "", name: "", addres: "", phone: "" });
        }
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="id" className="col-sm-2 col-form-label">ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="id" name="id" value={this.state.id} onChange={this.handleidChange} placeholder="id" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handlenameChange} placeholder="name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="addres" className="col-sm-2 col-form-label">Addres</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="addres" name="addres" value={this.state.addres} onChange={this.handleaddresChange} placeholder="addres" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handlephoneChange} placeholder="Number" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postUser: (id, name, addres, phone) => dispatch(postUser(id, name, addres, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(UserForm)
