import {combineReducers, createStore} from "redux";
import {complexCounterReducer} from "./ComplexCounter/counter-reducer";


const rootReducer = combineReducers({
    complexCounter: complexCounterReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
