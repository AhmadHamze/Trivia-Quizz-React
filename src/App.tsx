import React from 'react';
import { getQuizzData } from './api/quizz-api';

function App() {
  getQuizzData()
  //.then((data) => console.log(data))
  //.catch((err) => console.error(err));
  return (
    <div className="container">
      My first react TS application
    </div>
  );
}

export default App;
