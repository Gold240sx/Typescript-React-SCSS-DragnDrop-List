// import React from 'react';
import './Styles/SCSS/App.scss';
import InputField from './TS/Components/InputField'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <span className="heading">Taskify</span>
        <InputField />
      </header>
    </div>
  );
}

export default App;
