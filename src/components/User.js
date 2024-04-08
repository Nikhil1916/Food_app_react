import { useState } from "react";

const User = (props) => {
    const { name } = props;
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Ludhiana</h3>
            <h4>Contact: @NikhilChawla</h4>
        </div>
    )
}

export default User;