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
            console.log(item,'ini item');
            
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
                <thead className="thead-light">
                    <tr>
                        <th scope="col">CALL NAME</th>
                        <th scope="col">FULL NAME</th>
                        <th scope="col">ADDRES</th>
                        <th scope="col">PHONE NUMBER</th>
                        <th scope="col">SETTING</th>
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