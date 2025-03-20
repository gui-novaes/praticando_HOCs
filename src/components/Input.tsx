import { CSSProperties } from "react";
import withToggle from "../HOC/withToggle.jsx";
import React from "react";

interface InputProps {
    style: CSSProperties | undefined;
    field: string;
    children: number | string;
    status: boolean;
    onToggle: () => void;
}

const Input: React.FC<InputProps> = (props) => {

    if (props.status){
        return <input onMouseOver={props.onToggle} value={props.children} style={props.style} title={props.field}/>
    }
    
    return <input onMouseOver={props.onToggle} value={props.children}></input>
}

export default withToggle(Input);