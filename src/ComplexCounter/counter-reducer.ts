
export const SET_DISPLAY = 'SET-DISPLAY';
export const SET_NEW_MAX_VALUES = 'SET-NEW-MAX-VALUES';
export const SET_NEW_START_VALUES = 'SET-NEW-START-VALUES';
export const SET_INCREMENT = 'SET-INCREMENT';
export const RESET_CHANGED_VALUE = 'RESET-CHANGED-VALUE';

export type ComplexCounterType = {
    isOpen: boolean,
    maxValue: number,
    startValue: number,
    changedValue: number,
}

const initialState: ComplexCounterType = {
    isOpen: false,
    maxValue: 1,
    startValue: 0,
    changedValue: 0,
};

export type SetDisplayActionType = {
    type: typeof SET_DISPLAY
    isOpen: boolean
}

export type SetNewMaxValuesActionType = {
    type: typeof SET_NEW_MAX_VALUES
    maxValue: number
}

export type SetNewStartValuesActionType = {
    type: typeof SET_NEW_START_VALUES
    startValue: number
}

export type SetIncrementActionType = {
    type: typeof  SET_INCREMENT
    changedValue: number
}

export type ResetChangedValueActionType = {
    type: typeof  RESET_CHANGED_VALUE
    startValue: number
    changedValue: number
}

type ActionType = SetNewMaxValuesActionType | SetDisplayActionType |
    SetNewStartValuesActionType | SetIncrementActionType |
    ResetChangedValueActionType;

export const complexCounterReducer = (state: ComplexCounterType = initialState, action: ActionType): ComplexCounterType => {
    switch (action.type) {
        case SET_DISPLAY:
            return {
                ...state,
               isOpen: action.isOpen
        }
        case SET_NEW_MAX_VALUES:
            return {
                ...state,
                maxValue: action.maxValue
        }
        case SET_NEW_START_VALUES:
            return {
                ...state,
                startValue: action.startValue,
                changedValue: action.startValue
        }
        case SET_INCREMENT:
            return {
                ...state,
                changedValue: action.changedValue + 1
        }
        case RESET_CHANGED_VALUE:
            return {
                ...state,
                changedValue: action.startValue
        }
        default:
            return state;
    }
};

export const SetDisplay = (isOpen: boolean): SetDisplayActionType => {
    return { type: SET_DISPLAY, isOpen}
}

export const SetNewMaxValues = (maxValue: number): SetNewMaxValuesActionType => {
    return { type: SET_NEW_MAX_VALUES, maxValue}
}

export const SetNewStartValues = (startValue: number): SetNewStartValuesActionType => {
    return { type: SET_NEW_START_VALUES, startValue}
}

export const SetIncrement = (changedValue: number): SetIncrementActionType => {
    return { type: SET_INCREMENT, changedValue}
}

export const ResetChangedValue = (startValue: number, changedValue: number): ResetChangedValueActionType => {
    return { type: RESET_CHANGED_VALUE, startValue, changedValue}
}

export default complexCounterReducer;