import React from 'react';
import Map from './components/Map';
import QuestionPanel from './components/QuestionPanel';
import Scoreboard from './components/Scoreboard';
import TeamControls from './components/TeamControls';
import { useGameState } from './hooks/useGameState';

const App: React.FC = () => {
    const {
        teams,
        currentQuestion,
        selectCategory,
        submitAnswer,
        scores,
        winningTeam,
    } = useGameState();

    return (
        <div className="app">
            <h1>Turkey Quiz Game</h1>
            <Map teams={teams} winningTeam={winningTeam} />
            <QuestionPanel 
                question={currentQuestion} 
                submitAnswer={submitAnswer} 
            />
            <Scoreboard scores={scores} />
            <TeamControls 
                teams={teams} 
                selectCategory={selectCategory} 
            />
        </div>
    );
};

export default App;