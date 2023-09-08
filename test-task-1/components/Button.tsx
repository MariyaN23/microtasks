import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
            <button style={{backgroundColor: "rgba(41,149,250,0.8)", borderRadius: "5px"}}
                    onClick={props.callBack}
                    disabled={props.disabled}>{props.name}
            </button>
    )
};

