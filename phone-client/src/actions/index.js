import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3000/graphql/'

const client = new ApolloClient({
    uri: API_URL
});

// start load user data
export const loadUserSuccess = (contact) => ({
    type: 'LOAD_USER_SUCCESS',
    contact
})

export const loadUserFailure = () => ({
    type: 'LOAD_USER_FAILURE'
})

export const loadUser = () => {
    const contactQuery = gql`
    query { 
        users{
        id
        name
        addres
        phone
    }
    }`;
    return dispatch => {
        return client.query({
            query: contactQuery,
        })
            .then(function (response) {
                console.log(response);
                dispatch(loadUserSuccess(response.data.contact))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadUserFailure())
            });
    }
}

// end load user data

// start post user data

export const postUserSuccess = (contact) => ({
    type: 'POST_USER_SUCCESS',
    contact
})

export const postUserFailure = (id) => ({
    type: 'POST_USER_FAILURE', id
})

const postUserRedux = (id, name, addres, phone) => ({
    type: 'POST_USER', id, name, addres, phone
})


export const postUser = (id, name, addres, phone) => {
    const addQuery = gql`
    mutation addUser($id: String!, $name: String!, $addres: String!, $phone : String!) {
    addUser(id: $id, name: $name, addres: $addres, phone: $phone) {
        id
        name
        addres
        phone
    }
    }`;
    return dispatch => {
        dispatch(postUserRedux(id, name, addres, phone))
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                name,
                addres,
                phone
            }
        })
            .then(function (response) {
                dispatch(postUserSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postUserFailure(id))
            });
    }
}

// start delete user data

const deleteUserRedux = (id) => ({
    type: 'DELETE_USER', id
})

export const deleteUserSuccess = (contact) => ({
    type: 'DELETE_USER_SUCCESS',
    contact
})

export const deleteUserFailure = () => ({
    type: 'DELETE_USER_FAILURE'
})


export const deleteUser = (id) => {
    const deleteQuery = gql`
    mutation removeUser($id: String!) {
    removeUser(id: $id) {
        id
    }
    }`;
    return dispatch => {
        dispatch(deleteUserRedux(id))
        return client.mutate({
            mutation: deleteQuery,
            variables: {
                id
            }
        })
            .then(function (response) {
                dispatch(deleteUserSuccess(response))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(deleteUserFailure())
            });
    }
}

// end delete user data

export const resendUser = (id, name, addres, phone) => {
    const addQuery = gql`
    mutation updateUser($id: String!, $name: String!, $addres: String! $phone: String!) {
    addUser(id: $id, name: $name, addres: $addres, phone: $phone) {
        id
        name
        addres
        phone
    }
    }`;
    return dispatch => {
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                name,
                addres,
                phone
            }
        })
            .then(function (response) {
                dispatch(postUserSuccess(response))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postUserFailure(id))
            });
    }
}