import React, { Component } from 'react';
import User from './UserActive';
import { connect } from 'react-redux';
import { loadUser } from '../actions';
import EditForm from './EditForm'

class UserList extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        const nodes = this.props.users.map((item, index) => {
            return (
                item.isVisible && (item.onEdit ?
                    <EditForm
                        key={index}
                        id={item.id} index={index + 1}
                        name={item.name}
                        addres={item.addres}
                        phone={item.phone}
                        sent={item.sent} />
                    :
                    <User
                        key={index}
                        id={item.id} index={index + 1}
                        name={item.name}
                        addres={item.addres}
                        phone={item.phone}
                        sent={item.sent} />
                        )
            )
        })

        return (

            <table className="table table-bordered table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Call Name</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Addres</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {nodes}
                </tbody>
            </table>

        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    loadUser: () => dispatch(loadUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)