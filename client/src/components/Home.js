import { useState } from 'react';

function Home() {
    const [buttonName, setButtonName] = useState('')

    function getButtonName() {

        // fetch button name from nodejs, assign to buttonName
        fetch('http://localhost:8000/homeButtonName')
            .then((res) => res.json())
            .then((data) => setButtonName(data.buttonName))
    }

    // display button, name if button was clicked
    return (
        <>
            <button onClick={getButtonName}>
                Home
            </button>

            {
                buttonName && 
                <div>{buttonName}</div>
            }
        </>
    );
}

export default Home;