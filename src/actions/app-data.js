import { INITIALIZE_STORE } from "../action-types"

export const initialiseAppdata = (data) => {
    return {
        type: INITIALIZE_STORE,
        data: data
    }
}