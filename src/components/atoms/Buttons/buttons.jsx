import React from "react";
import Style from "./buttons.module.css";

const Button = ({icone, title, action}, ...props) => {
    console.log("props" + title + ": " + props);
    return (
        <div>
            <button onClick={action} className={Style.button}>{icone} {title}</button>
        </div>
    );
}

export default Button;