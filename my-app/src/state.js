import { combineReducers, createStore } from 'redux';

// Фамилия, Имя, дата рождения, Расположение
const ADD_USERS_DATA = 'ADD_USERS_DATA';
const UPDATE_USERS_DATA = 'UPDATE_USERS_DATA'
const UPDATE_USERS_LASTNAME = 'UPDATE_USERS_LASTNAME'
const UPDATE_USERS_DAY = 'UPDATE_USERS_DAY'
const UPDATE_USERS_MONTH = 'UPDATE_USERS_MONTH'
const UPDATE_USERS_YEAR = 'UPDATE_USERS_YEAR'
const UPDATE_USERS_LOCATION_CITY = 'UPDATE_USERS_LOCATION_CITY'
const UPDATE_USERS_LOCATION_COWNTRY = 'UPDATE_USERS_LOCATION_COWNTRY'

let initialState = {
    Users : [
        {
            named: "Oliver ",
            lastName: 'Manson',
            DateOfBirth: [1983, 11, 12],
            location: {
                city: 'Liverpool',
                cowntry: 'GreatBrit'
            },
            id: 0,
        },
        {
            named: "Harry ",
            lastName: 'Jackson',
            DateOfBirth: [1983, 9, 22],
            location: {
                city: 'Almaty',
                cowntry: 'Kazakhstan'
            },
            id: 1,
        },
        {
            named: "Jacob ",
            lastName: 'Grayson',
            DateOfBirth: [1999, 3, 22],
            location: {
                city: 'Almaty',
                cowntry: 'Kazakhstan'
            },
            id: 2,
        }
    ]
}

let UsersData = (state = initialState, action) => {

    window.lala = state;

    switch (action.type) {
        case UPDATE_USERS_DATA: {
            debugger;
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], named: action.newText}
                ]

            }
        }
        case UPDATE_USERS_LASTNAME: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], lastName: action.newText}
                ]

            }
        }
        case UPDATE_USERS_DAY: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], DateOfBirth: [state.Users[action.id].DateOfBirth[0], state.Users[action.id].DateOfBirth[1], action.newText]}
                ]

            }
        }
        case UPDATE_USERS_MONTH: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], DateOfBirth: [state.Users[action.id].DateOfBirth[0], action.newText, state.Users[action.id].DateOfBirth[2]]}
                ]

            }
        }
        case UPDATE_USERS_YEAR: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], DateOfBirth: [action.newText, state.Users[action.id].DateOfBirth[1], state.Users[action.id].DateOfBirth[2]]}
                ]

            }
        }
        case UPDATE_USERS_LOCATION_CITY: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], location: {
                        ...state.Users[action.id].location,
                        city: action.newText
                    }}
                ]

            }
        }
        case UPDATE_USERS_LOCATION_COWNTRY: {
            return {
                Users: [
                    ...state.Users,
                    state.Users[action.id] = {...state.Users[action.id], location: {
                        ...state.Users[action.id].location,
                        cowntry: action.newText
                    }}
                ]

            }
        }
        case ADD_USERS_DATA: {
            return {
                Users: [
                    ...state.Users,
                    {
                        location: {
                            ...state.Users.location
                        }
                    }
                ],
            }
        }
        default:
            return state;
    }

}

let redusers = combineReducers({
    UsersPage: UsersData,
})

let store = createStore(redusers);


export const makeDate = (DateOfBirth) => {
    return (DateOfBirth[0] + '.' + DateOfBirth[1] + '.' + DateOfBirth[2])
}

export const addusersDataAC = () => ({ type: ADD_USERS_DATA });
export const updateusersDataAC = (text, id) =>
    ({ type: UPDATE_USERS_DATA, newText: text, id: id })
export const updateusermonthAC = (text, id) =>
    ({ type: UPDATE_USERS_MONTH, newText: text , id: id })
export const updateuserslastnameAC = (text, id) =>
    ({ type: UPDATE_USERS_LASTNAME, newText: text , id: id })
export const updateusersdayAC = (text, id) =>
    ({ type: UPDATE_USERS_DAY, newText: text , id: id })
export const updateusersyearAC = (text, id) =>
    ({ type: UPDATE_USERS_YEAR, newText: text , id: id })
export const updateuserslocationcityAC = (text, id) =>
    ({ type: UPDATE_USERS_LOCATION_CITY, newText: text , id: id })
export const updateuserslocationcowntryAC = (text, id) =>
    ({ type: UPDATE_USERS_LOCATION_COWNTRY, newText: text , id: id })


export default store;