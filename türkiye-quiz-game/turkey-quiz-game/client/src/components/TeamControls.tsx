import React from 'react';

const TeamControls = ({ teams, onCategorySelect, onAnswerSubmit }) => {
    const handleCategoryChange = (teamIndex, category) => {
        onCategorySelect(teamIndex, category);
    };

    const handleAnswerSubmit = (teamIndex, answer) => {
        onAnswerSubmit(teamIndex, answer);
    };

    return (
        <div className="team-controls">
            {teams.map((team, index) => (
                <div key={index} className="team-control">
                    <h3>{team.name}</h3>
                    <select onChange={(e) => handleCategoryChange(index, e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="geography">Geography</option>
                        <option value="history">History</option>
                    </select>
                    <button onClick={() => handleAnswerSubmit(index, team.selectedAnswer)}>Submit Answer</button>
                </div>
            ))}
        </div>
    );
};

export default TeamControls;