const users = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            // console.log(action, "ini item cuk")
            return action.users.map((item) => {
                item.sent = true;
                item.isVisible = true;
                item.onEdit = false; 
                return item
            })

        case 'POST_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    addres: action.addres,
                    phone: action.phone,
                    sent: true
                }
            ]

        case 'POST_USER_SUCCESS':
            return state.map((item) => {
                item.sent = true;
                return item
            })

        case 'POST_USER_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item
            })

        case 'UPDATE_ON':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && { onEdit: true })
            }))

        case 'UPDATE_OFF':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && { onEdit: false })
            }))

        case 'UPDATE_USER':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    name: action.name,
                    addres: action.addres,
                    phone: action.phone,
                    sent: true
                })
            }))

        case 'UPDATE_USER_SUCCESS':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    name: action.name,
                    addres: action.addres,
                    phone: action.phone,
                    sent: true
                })
            }))

        case 'UPDATE_USER_FAILURE':
            return state.map(item => ({
                ...item,
                ...(item.id === action.id && {
                    onEdit: false,
                    sent: false
                })
            }))

        case "SEARCH_USER":
            return state.map((item) => ({
                ...item,
                isVisible: (item.name.toLowerCase().includes(action.value) || item.name.includes(action.value))
            }))

        case "SEARCH_USER_RESET":
            return state.map((item) => ({
                ...item,
                isVisible: true
            }))

        case 'DELETE_USER':
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_USER_SUCCESS':
            return state

        case 'LOAD_USER_FAILURE':
        case 'DELETE_USER_FAILURE':
        default:
            return state
    }
}

export default users