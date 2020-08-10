import React, {ChangeEvent} from "react";
import {UniButton} from "../UniButton";
import classes from "./ComplexCounter.module.css";

type ComplexCounterPropsType = {
    isOpen: boolean
    maxValue: number
    startValue: number
    changedValue: number
    setDisplay: (isOpen: boolean) => void
    setNewMaxValues: (maxValue: number) => void
    setNewStartValues: (startValue: number) => void
    setIncrement: (changedValue: number) => void
    resetChangedValue: (startValue: number, changedValue: number) => void
}

const ComplexCounter = (props: ComplexCounterPropsType) => {

    let improveCount = () => {
        props.setIncrement(props.changedValue);
    }

    let resetCount = () => {
        props.resetChangedValue(props.startValue, props.changedValue);
    }

    let reSet = () => {
        props.setDisplay(!props.isOpen);
    }

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewMaxValues(Number(e.currentTarget.value));
    }

    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewStartValues(Number(e.currentTarget.value));
    }

    return <div className={classes.wrapper}>
        {props.isOpen ?
            <div>
                max value: <input
                type={"number"}
                value={props.maxValue}
                onChange={onMaxValueChange}
            />
                start value: <input
                type={"number"}
                value={props.startValue}
                onChange={onStartValueChange}
            />
            </div> :
            <div className={props.changedValue < props.maxValue ? classes.display : classes.displayError}>{
                props.startValue < props.maxValue ? props.changedValue : 'Wrong SV!'
            }</div>
        }
        <div className={classes.buttons}>
            <UniButton onClick={improveCount} value={'inc'} dis={props.changedValue === props.maxValue || props.startValue >= props.maxValue} />
            <UniButton onClick={resetCount} value={'reset'} dis={props.changedValue === props.startValue} />
            <UniButton onClick={reSet} value={'set'} />
        </div>
    </div>
}

export default ComplexCounter;