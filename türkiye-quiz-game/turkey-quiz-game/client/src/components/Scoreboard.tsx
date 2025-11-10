import React from 'react';

interface TeamScore {
    name: string;
    score: number;
}

interface ScoreboardProps {
    teams: TeamScore[];
}

const Scoreboard: React.FC<ScoreboardProps> = ({ teams }) => {
    const winningTeam = teams.reduce((prev, current) => (prev.score > current.score) ? prev : current);

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <ul>
                {teams.map((team, index) => (
                    <li key={index} style={{ fontWeight: team.name === winningTeam.name ? 'bold' : 'normal' }}>
                        {team.name}: {team.score}
                    </li>
                ))}
            </ul>
            <h3>Winning Team: {winningTeam.name}</h3>
        </div>
    );
};

export default Scoreboard;