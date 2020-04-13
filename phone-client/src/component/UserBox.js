import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserForm from '../containers/UserForm';
import UserSearch from '../containers/UserSearch';

export default class UserBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        React Phonebook App
            </div>
                    <div className="card-body">
                        <UserSearch/>
                        <br></br>
                        <UserList/>
                        <UserForm/>
                    </div>
                    <div className="card-footer text-center">
                        @create by Abushanum
            </div>
                </div>
            </div>
        )
    }
}