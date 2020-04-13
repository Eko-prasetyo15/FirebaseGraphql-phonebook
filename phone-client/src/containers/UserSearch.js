import React from 'react'
import { connect } from 'react-redux';
import { searchUser, searchUserReset } from '../actions'

class UserSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            search: false
        }

        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleButtonSearch = this.handleButtonSearch.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
    }

    handleButtonSearch() {
        this.setState({
            search: true
        })
    }

    handleButtonCancel() {
        this.setState({
            search: false
        })
        this.props.searchUserReset()
    }

    handleFilterChange(event) {
        let value = event.target.value
        this.setState({
            value: event.target.value
        })
        this.props.searchUser(value)
    }

    handleReset(event) {
        event.preventDefault();
        this.setState({
            value: ''
        })
        this.props.searchUserReset()
    }

    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline mr-auto">
                        <input class="form-control" type="text" placeholder="Name/Phone" aria-label="Search" value ={this.state.value} onChange={this.handleFilterChange}/>
                        <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" onClick={this.handleButtonSearch} type="submit">Search</button>
                    </form>
                </div>
            </nav>


        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    searchUser: (value) => { dispatch(searchUser(value)) },
    searchUserReset: () => { dispatch(searchUserReset()) }
})

export default connect(
    null,
    mapDispatchToProps
)(UserSearch)