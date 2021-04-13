import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics'

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give Feedback</h1>
            <Button onClick={() => setGood(good + 1)}>good</Button>
            <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
            <Button onClick={() => setBad(bad + 1)}>bad</Button>
            <Statistics {...{ good, neutral, bad }} />
        </div>
    )

}

export default App
