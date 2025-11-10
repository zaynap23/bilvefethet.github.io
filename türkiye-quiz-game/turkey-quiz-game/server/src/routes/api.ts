import { Router } from 'express';
import questions from '../data/questions.db.json';

const router = Router();

// Endpoint to get all questions
router.get('/questions', (req, res) => {
    res.json(questions);
});

// Endpoint to get questions by category
router.get('/questions/:category', (req, res) => {
    const category = req.params.category;
    const filteredQuestions = questions.filter(question => question.category === category);
    res.json(filteredQuestions);
});

// Endpoint to get all categories
router.get('/categories', (req, res) => {
    const categories = [...new Set(questions.map(question => question.category))];
    res.json(categories);
});

export default router;