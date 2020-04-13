import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updateOFF } from '../actions';

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            addres: props.addres,
            phone: props.phone
        }

        this.handlenameChange = this.handlenameChange.bind(this)
        this.handleaddresChange = this.handleaddresChange.bind(this)
        this.handlephoneChange = this.handlephoneChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlenameChange(event) {
        this.setState({
            name: event.target.value,
            isValid: true
        })
    }

    handleaddresChange(event) {
        this.setState({
            addres: event.target.value,
            isValid: true
        })
    }

    handlephoneChange(event) {
        this.setState({
            phone: event.target.value,
            isValid: true
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.updateUser(this.state.id, this.state.name, this.state.addres, this.state.phone)
    }
    render() {
        return (
            // onSubmit={this.handleSubmit}
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>

                    <input type="text" className="form-control" name="id" value={this.state.id} disabled={true} />

                </td>
                <td>

                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handlenameChange} required={true} />

                </td>
                <td>
                    <input type="text" className="form-control" name="addres" value={this.state.addres} onChange={this.handleaddresChange} required={true} />

                </td>
                <td>

                    <input type="number" className="form-control" name="phone" value={this.state.phone} onChange={this.handlephoneChange} required={true} />

                </td>
                <td>
                    <button type="submit" className="btn  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
                    <button type="button" className="btn " onClick={() => this.props.onCancel()}><i className="fas fa-times"></i> Cancel</button>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancel: () => dispatch(updateOFF(ownProps.id)),
    updateUser: (id, name, addres, phone) => {
        dispatch(updateUser(id, name, addres, phone))
        dispatch(updateOFF(ownProps.id))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(EditForm)