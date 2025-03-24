import React from "react";
import Input from "../components/Input.tsx";

interface IRenderProps {
    render: (state: {name: string}) => void;
}

const Render: React.FC<IRenderProps> = (props) => {
    return (
        <>
            <br />
            <Input>Testando Render</Input>
            <br />
            {props.render({name: "Meu Render"})}
        </>
    );
};

export default Render;