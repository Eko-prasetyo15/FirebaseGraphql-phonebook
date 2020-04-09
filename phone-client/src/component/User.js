import React from 'react';

const User = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.addres}</td>
            <td>{props.phone}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={props.sent ? props.onDelete : props.resend}>
                    {props.sent ? 'Hapus' : 'Kirim Ulang'}
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.sent ? props.onEdit : props.resend}>
                    {props.sent ? 'Edit' : 'Kirim Ulang'}
                </button>
            </td>
            {!props.sent &&
                <td style={{ color: "red", fontSize: "8px" }}>
                    network failed, please check your connections
            </td>
            }
        </tr>
    )
}

export default User;