import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent/Parent';
import OverviewHooks from './components/OverviewHooks/OverviewHooks';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);
// console.log(ThemeContext);

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <Parent />
        <Toolbar />
      </ThemeContext.Provider>
      <OverviewHooks />
    </div>
  );
}

const Toolbar = props => {
  return(
    <div>
      <ThemeButton />
    </div>
  );
};

const ThemeButton = props => {
  const theme = useContext(ThemeContext);
  return(
    <div>
      <h2>React Context API</h2>
      <button style={{background: theme.background, color: theme.foreground}}>
        I am styled by theme context!
      </button>
    </div>
  );
};

export default App;
