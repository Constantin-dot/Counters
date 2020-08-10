import React from "react";
import {Button} from "@material-ui/core";


type UniButtonPropsType = {
    onClick: () => void
    value: string
    dis?: boolean
}

export const UniButton = (props: UniButtonPropsType) => {

    return (
        <Button variant={"outlined"}
                onClick={props.onClick}
                disabled={props.dis}
                style={{margin: '5px'}}
        >
            {props.value}
        </Button>
    )
}