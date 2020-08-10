import React, {useCallback} from 'react';
import './App.css';
import ComplexCounter from "./ComplexCounter/ComplexCounter";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    ComplexCounterType, ResetChangedValue,
    SetDisplay,
    SetIncrement,
    SetNewMaxValues,
    SetNewStartValues
} from "./ComplexCounter/counter-reducer";

function App() {
    const dispatch = useDispatch();
    const complexCounter = useSelector<AppRootStateType, ComplexCounterType>(
        state => state.complexCounter
    );

    const setDisplay = useCallback((isOpen) => {
        dispatch(SetDisplay(isOpen));
    }, [dispatch]);

    const setNewMaxValues = useCallback((maxValue) => {
        dispatch(SetNewMaxValues(maxValue));
    }, [dispatch]);

    const setNewStartValues = useCallback((startValue) => {
        dispatch(SetNewStartValues(startValue));
    }, [dispatch]);

    const setIncrement = useCallback((changedValue) => {
        dispatch(SetIncrement(changedValue));
    }, [dispatch]);

    const resetChangedValue = useCallback((startValue, changedValue) => {
        dispatch(ResetChangedValue(startValue, changedValue));
    }, [dispatch]);

    return (
        <div className="App">
            <SimpleCounter />
            <ComplexCounter
                isOpen={complexCounter.isOpen}
                maxValue={complexCounter.maxValue}
                startValue={complexCounter.startValue}
                changedValue={complexCounter.changedValue}
                setDisplay={setDisplay}
                setNewMaxValues={setNewMaxValues}
                setNewStartValues={setNewStartValues}
                setIncrement={setIncrement}
                resetChangedValue={resetChangedValue}
            />
        </div>
    );
}

export default App;
