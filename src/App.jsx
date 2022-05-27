import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

function NoMatch() {
  return (
    <div>
      <h2>Test</h2>
      <p>
        <Link to="/">Test</Link>
      </p>
    </div>
  );
}

export default App;
