import './App.scss';

import ThemeContextProvider from './global/ThemeContext';

import Home from './pages/Home';

function App() {

  return (
    <ThemeContextProvider>
      <Home></Home>
    </ThemeContextProvider>
  );
}

export default App
