# Game of Life

According to [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), Game of Life is a zero-player game, meaning that its evaluation is determined by its initial state, requiring no further input.  The aim is to implement this game using the technologies of HTML, CSS, JavaScript and React.

## UX

The rules are in [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

### User Stories

As a user, when I first arrive at the game, it will randomly generate a board and start playing.

As a user, I can start and stop the board.

As a user, I can set up the board.

As a user, I can clear the board.

As a user, when I press start the game will play out.

As a user, I can see how many generations have gone by, every time the board changes.

## Features

The ability to start and stop the board.  Also to set up and clear the board.  See how many generations have gone by.

## Technologies

Uses HTML5, CSS3, Google Fonts, JavaScript and React 17.0.2.

## Testing

Ensure all the user stories have been met.

## Deployment

Enter the command `cd game` and then `npm start` to begin development.

Go to package.json and add `"homepage":"https://derektypist.github.io/game-of-life"`.  Within scripts, add
`"predeploy":"npm run build","deploy":"gh-pages -d build"`.  Still in `game` type `npm run deploy`, when asked enter username and password.

Deployed on [GitHub Pages](https://derektypist.github.io/game-of-life) at the main branch.

## Credits

### Content

Did a Google Search on `freecodecamp game of life` and found the article from [Pablo Regen](https://www.freecodecamp.org/news/coding-the-game-of-life-with-react-7de2385b7356/).  This includes the link to the GitHub Repository of Game of Life. All have been
accessed on August 2021.

### Acknowledgements

- [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [FreeCodeCamp](https://www.freecodecamp.org)
- [Pablo Regen - GitHub Repository](https://github.com/PabloRegen/game-of-life)