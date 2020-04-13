import React from 'react';

const User = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <th scope="row">{props.name}</th>
            <th scope="row">{props.addres}</th>
            <th scope="row">{props.phone}</th>
            <td>
                {props.sent ? (
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={props.onEdit}> Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={props.onDelete}> Delete
                        </button>
                    </div>
                ):
                    <button type="button" onClick={props.resend} className="btn">
                    <i className="fas fa-sync-alt"></i> Resend</button>
}
            </td>
        </tr>
    )
}

export default User;