import { useState, useEffect } from 'react';
import { Question, Team } from '../types';

const useGameState = () => {
    const [teams, setTeams] = useState<Team[]>([
        { id: 1, name: 'Team A', score: 0, color: 'red' },
        { id: 2, name: 'Team B', score: 0, color: 'blue' },
        { id: 3, name: 'Team C', score: 0, color: 'green' },
        { id: 4, name: 'Team D', score: 0, color: 'yellow' },
    ]);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [isGameActive, setIsGameActive] = useState<boolean>(false);

    useEffect(() => {
        if (isGameActive) {
            fetchNextQuestion();
        }
    }, [isGameActive, selectedCategory]);

    const fetchNextQuestion = async () => {
        // Fetch the next question based on the selected category
        // This is a placeholder for the actual fetching logic
        const question: Question = {
            id: 1,
            category: selectedCategory,
            question: 'What is 2 + 2?',
            options: ['A: 3', 'B: 4', 'C: 5', 'D: 6'],
            correctAnswer: 'B',
        };
        setCurrentQuestion(question);
    };

    const submitAnswer = (teamId: number, answer: string) => {
        if (currentQuestion && answer === currentQuestion.correctAnswer) {
            setTeams((prevTeams) =>
                prevTeams.map((team) =>
                    team.id === teamId ? { ...team, score: team.score + 1 } : team
                )
            );
        }
        fetchNextQuestion();
    };

    const startGame = (category: string) => {
        setSelectedCategory(category);
        setIsGameActive(true);
    };

    const resetGame = () => {
        setTeams((prevTeams) =>
            prevTeams.map((team) => ({ ...team, score: 0 }))
        );
        setIsGameActive(false);
        setCurrentQuestion(null);
        setSelectedCategory('');
    };

    return {
        teams,
        currentQuestion,
        isGameActive,
        startGame,
        submitAnswer,
        resetGame,
    };
};

export default useGameState;