import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserForm from '../containers/UserForm';

export default class UserBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        React Phonebook
            </div>
                    <div className="card-body">
                        <UserList />
                        <UserForm />
                    </div>
                    <div className="card-footer text-center">
                        @create by Abushanum
            </div>
                </div>
            </div>
        )
    }
}