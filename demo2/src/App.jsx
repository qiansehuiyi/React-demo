import React, { useState } from 'react';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const all = good + neutral + bad;

    const avge = (good * 1 + neutral * 0 + bad * (-1)) / all

    return (
        <div>
            <h1>give Feedback</h1>
            <p>
                <button onClick={() => setGood(good + 1)}>good</button>
            </p>
            <p>
                <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            </p>
            <p>
                <button onClick={() => setBad(bad + 1)}>bad</button>
            </p>
            <h1>statistics</h1>
            <p>good:{good}</p>
            <p>neutral:{neutral}</p>
            <p>bad:{bad}</p>
            <p>all:{all}</p>
            <p>avge:{avge}</p>
        </div>
    )

}

export default App
