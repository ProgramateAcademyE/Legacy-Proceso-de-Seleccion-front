import React, { useState } from "react";
import disablebutton from "./disablebtn.module.css"

const DisableBtn = () => {
    const [disable, setDisable] = useState(false);

    return (
        <div>
            <div
                className={disable ? "disable" : "able"}
                onClick={() => setDisable(!disable)}
            >
                <i className="fas fa-power-off"></i>
            </div>
        </div>
    );
};

export default DisableBtn;
