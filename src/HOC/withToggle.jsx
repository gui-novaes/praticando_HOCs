import { useState } from "react"

const withToggle = (Component) => {

    const WithToggle = (props) => {
        const [focus, setFocus] = useState(false);

        // passando css para uma constante, um objeto que defini o estilo de forma inline
        const greenBorder = {
            border: "5px solid green",
            padding: "5px",
        };

        // texto no required, ao passar o mouse no input
        const fillField = 'Fill in this field';

        const handleFocus = () => 
            
            setFocus(!focus); // quando tiver alguma ação sobre esse handle ele vai virar o oposto do 'status' ou seja, true

        return <Component {...props} status={focus} style={greenBorder} field={fillField} onToggle={handleFocus} />;
    };

    return WithToggle;

}

export default withToggle;