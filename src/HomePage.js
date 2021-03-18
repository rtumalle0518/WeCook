import React from 'react';

const HomePage = ({handleLogout}) => {
    return(
        <section className = "HomePage">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default HomePage;