export interface Question {
    id: number;
    category: string;
    question: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface Team {
    id: number;
    name: string;
    score: number;
    color: string;
    regionsMarked: number[];
}