export const CATEGORIES = {
    MATHEMATICS: {
        name: "Mathematics",
        description: "Questions related to basic math concepts.",
    },
    GEOGRAPHY: {
        name: "Geography",
        description: "Questions about countries, capitals, and physical features.",
    },
    HISTORY: {
        name: "History",
        description: "Questions covering significant historical events and figures.",
    },
};

export const CATEGORY_LIST = Object.values(CATEGORIES).map(category => category.name);