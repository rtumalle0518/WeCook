import React from 'react';
import {Link} from "react-router-dom"
const HomePage = ({handleLogout}) => {
    return(
        <section className = "HomePage">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
                Go to DashBoard? <Link to = "/DashBoard">DashBoard</Link>
            </nav>
        </section>
    )
}

export default HomePage;