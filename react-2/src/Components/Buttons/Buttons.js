import React from "react";

function Buttons(props) {

        return (
            <div>
                 <button className="card-button" onClick={() => props.previous()}>{`< Previous`}</button>
                 <button className="card-button" onClick={() => props.next()}>{`Next >`}</button>
            </div>
        )
}

export default Buttons;