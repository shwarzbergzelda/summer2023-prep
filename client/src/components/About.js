import { useState } from 'react';

function About() {
    const [buttonName, setButtonName] = useState('')

    function getButtonName() {

        // fetch button name from nodejs, assign to buttonName
        fetch('http://localhost:8000/aboutButtonName')
            .then((res) => res.json())
            .then((data) => setButtonName(data.buttonName))
    }

    // display button, name if button was clicked
    return (
        <>
            <button onClick={getButtonName}>
                About
            </button>

            {
                buttonName && 
                <div>{buttonName}</div>
            }
        </>
    );
}

export default About;