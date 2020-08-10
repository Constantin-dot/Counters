import React, {useState} from "react";
import {UniButton} from "../UniButton";
import classes from "./SimpleCounter.module.css";

const SimpleCounter = () => {
    let [count, setCount] = useState(0);

    let improveCount = () => {
        setCount(count+1);
    }

    let resetCount = () => {
        setCount(0);
    }

    return <div className={classes.wrapper}>
        <div className={count < 5 ? classes.display : classes.displayError}>{count}</div>
        <div className={classes.buttons}>
            <UniButton onClick={improveCount} value={'inc'} dis={count === 5} />
            <UniButton onClick={resetCount} value={'reset'} dis={count === 0} />
        </div>
    </div>
}

export default SimpleCounter;