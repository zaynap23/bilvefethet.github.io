# Turkey Quiz Game

Welcome to the Turkey Quiz Game! This web application is designed for middle school level competitions, featuring four competitor groups that can select categories and answer questions related to basic mathematics, geography, and history.

## Features

- **Interactive Map**: A detailed map of Turkey divided into 14 regions, where winning groups can mark regions in their assigned colors.
- **Dynamic Question System**: A question panel that displays multiple-choice questions (A, B, C, D) based on the selected category.
- **Team Controls**: Teams can select categories and submit their answers.
- **Scoreboard**: Displays the scores of all competitor groups and highlights the winning group.

## Project Structure

The project is organized into two main parts: the client and the server.

### Client

- **public/index.html**: Main HTML entry point for the web application.
- **src/main.tsx**: Entry point for the React application.
- **src/App.tsx**: Main App component managing game state and layout.
- **src/components**: Contains components for the map, question panel, scoreboard, and team controls.
- **src/hooks/useGameState.ts**: Custom hook for managing game state.
- **src/styles/main.css**: CSS styles for the application.
- **src/data/questions.json**: Contains questions for each category.
- **src/data/categories.ts**: Exports constants for available categories.
- **src/types/index.ts**: TypeScript types and interfaces used in the application.

### Server

- **src/index.ts**: Entry point for the server application.
- **src/routes/api.ts**: API routes for fetching questions and categories.
- **src/data/questions.db.json**: Database of questions used by the server.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd turkey-quiz-game/client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. In a new terminal, navigate to the client directory and start the React application:
   ```
   cd ../client
   npm start
   ```

## Game Rules

1. Each team selects a category to answer questions.
2. Teams take turns answering questions.
3. Correct answers allow teams to mark regions on the map.
4. The team with the most points at the end of the game wins!

Enjoy the game and may the best team win!