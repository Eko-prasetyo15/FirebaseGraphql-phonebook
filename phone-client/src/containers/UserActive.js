import { connect } from 'react-redux'
import { deleteUser, resendUser } from '../actions'
import User from '../component/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteUser(ownProps.id)),
    resend: () => dispatch(resendUser(ownProps.id, ownProps.name, ownProps.addres, ownProps.phone))
})

export default connect(
    null,
    mapDispatchToProps
)(User)
