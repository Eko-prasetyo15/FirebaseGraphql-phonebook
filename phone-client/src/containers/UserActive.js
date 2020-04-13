import { connect } from 'react-redux'
import { deleteUser, resendUser, updateON } from '../actions'
import User from '../component/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteUser(ownProps.id)),
    resend: () => dispatch(resendUser(ownProps.id, ownProps.name, ownProps.addres, ownProps.phone)),
    onEdit: () => dispatch(updateON(ownProps.id))
})

export default connect(
    null,
    mapDispatchToProps
)(User)
