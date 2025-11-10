import React from 'react';
import { useGameState } from '../hooks/useGameState';

const QuestionPanel: React.FC = () => {
    const { currentQuestion, selectAnswer } = useGameState();

    const handleAnswerClick = (answer: string) => {
        selectAnswer(answer);
    };

    return (
        <div className="question-panel">
            <h2>{currentQuestion?.question}</h2>
            <div className="options">
                {currentQuestion?.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionPanel;