import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { defaultTheme, ThemeContext, setStyle, removeStyle, storeTheme } from './global/ThemeContext';

function App() {

  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    removeStyle();
    setStyle('theme', theme);
    return () => {}
  }, [theme])

  const changeTheme = (theme) => {
    return () => {
      setTheme(theme)
      storeTheme(theme)
    }
  }

  const scrollToView = () => {
    document.getElementsByClassName('App-content')[0].scrollIntoView({ behavior: "smooth"})
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p className="App-title">{theme}</p>
          <div className="App-button-group">
            <button onClick={changeTheme('white')}>乳白</button>
            <button onClick={changeTheme('black')}>玄黑</button>
            <button onClick={changeTheme('blue')}>海蓝</button>
          </div>
          <div className="App-header-bottom" onClick={scrollToView}>
            <div className="App-header-bottom-icon">
              <div></div>
              <div></div>
            </div>
            &nbsp;滚动获取更多
          </div>
        </header>
        <section className="App-content">
          <div className="App-content-form">
            <div>
              <input placeholder="username" defaultValue="hello@world"></input>&nbsp;
              <input placeholder="username" disabled defaultValue="hello@world"></input>
            </div>
            <div style={{display: "flex"}}>
              <button type="primary">primary</button>&nbsp;
              <button type="success">success</button>&nbsp;
              <button type="danger">danger</button>&nbsp;
              <button type="warning">warning</button>&nbsp;
              <button type="default">default</button>
            </div>
            <ul>
              {
                new Array(100).fill(`hello`).map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>

            <div className="icons">
              <svg viewBox="0 0 16 16" id="abstract"><path d="M6.48,10.26a1.6,1.6,0,0,0,2.78,1.6c.55-1,4-9.47,3.75-9.68S7.07,9.33,6.48,10.26ZM8,4.19a8.18,8.18,0,0,1,1,.08l1.14-1.39A7.16,7.16,0,0,0,8,2.59c-4.51,0-8,3.79-8,8.63a6.22,6.22,0,0,0,0,.88.8.8,0,1,0,1.6-.17,4.58,4.58,0,0,1,0-.76c0-3.92,2.82-7,6.4-7Zm5.77,1c-.21.59-.46,1.22-.67,1.73a7.59,7.59,0,0,1,1.31,4.26,4.58,4.58,0,0,1,0,.76.83.83,0,0,0,.72.88h.08a.78.78,0,0,0,.8-.72,6.22,6.22,0,0,0,0-.88,8.82,8.82,0,0,0-2.23-6Z"/></svg>
              <svg viewBox="0 0 16 16" id="ai"><path d="M6.87,16a4.63,4.63,0,0,0,.61-6.34A4.28,4.28,0,0,0,4.13,8c-.24,0-.48,0-.72,0V5.25a5.27,5.27,0,0,1,4-5c3-.9,6.06,1.3,6.4,3.65,0,.2.34,1.45.39,1.8.24,1.1.48,2.35.67,3.9L15,10H13.65v3H9.9v3ZM1,12.45a3.34,3.34,0,0,1,3.27-3.4,3.34,3.34,0,0,1,3.27,3.4,3.34,3.34,0,0,1-3.27,3.4A3.3,3.3,0,0,1,1,12.51v-.06ZM3.84,15a1.29,1.29,0,0,0,.43,0,2.5,2.5,0,0,0,2.41-1.9,8.81,8.81,0,0,1-2.6-.2,10.29,10.29,0,0,0-.24,2ZM1.77,12.4a2.65,2.65,0,0,0,1.3,2.3,7.77,7.77,0,0,1,.29-2A8.76,8.76,0,0,1,1.82,12a1.48,1.48,0,0,0,0,.45Zm2.5-.25a8.11,8.11,0,0,0,2.5.2A2.54,2.54,0,0,0,5.14,10,11,11,0,0,0,4.27,12.15Zm-2.21-1A4.63,4.63,0,0,0,3.55,12,15,15,0,0,1,4.37,9.8h-.1a2.47,2.47,0,0,0-2.21,1.4Z"/></svg>
              <svg viewBox="0 0 17.61 17.61" id="analysis"><g transform="translate(-0.4 -0.4)"><path d="M8.3,16.6a8.3,8.3,0,1,1,8.3-8.3A8.309,8.309,0,0,1,8.3,16.6Zm0-15A6.7,6.7,0,1,0,15,8.3,6.707,6.707,0,0,0,8.3,1.6Z" transform="translate(0.4 0.4)"/><path d="M1.153,4.976A.627.627,0,1,1,.1,4.293L2.58.471a.627.627,0,0,1,.972-.1l3.23,3.267L8.95.287A.627.627,0,0,1,10,.968L7.412,4.975a.627.627,0,0,1-.973.1L3.208,1.808Z" transform="translate(3.744 5.93)"/><circle cx="1.254" cy="1.254" r="1.254" transform="translate(3.068 9.259)"/><circle cx="1.254" cy="1.254" r="1.254" transform="translate(5.577 5.496)"/><circle cx="1.254" cy="1.254" r="1.254" transform="translate(9.34 9.259)"/><circle cx="1.254" cy="1.254" r="1.254" transform="translate(11.849 5.496)"/><path d="M0,1.139,1.124,0,4.412,3.244,3.288,4.383Z" transform="translate(13.598 13.626)"/></g></svg>
              <svg viewBox="0 0 16 16" id="analyze-detail"><path d="M15.71,14.29,13.46,12A7.52,7.52,0,1,0,12,13.46l2.25,2.25a1,1,0,0,0,1.41-1.41ZM2.54,9.87,4.27,8.14,7.14,11l4.09-4.09a1,1,0,0,0,0-1.41h0a1,1,0,0,0-1.41,0L7.14,8.18,4.27,5.31,2,7.58s0-.05,0-.08a5.52,5.52,0,1,1,.54,2.37Z"/></svg>
              <svg viewBox="0 0 16 16" id="analyze"><path d="M16,9V3H10V5h2.65L9.07,8.59l-4-4-3,3V0H0V16H16V14H2V10.41l3-3,4,4L14,6.48V9ZM13.93,5H14v.07Z"/></svg>
              <svg viewBox="0 0 16 16" id="angle-double-down"><path d="M8 6.859l-4.079-4.45a.632.632 0 0 0-.919-.021.696.696 0 0 0-.022.956l4.55 4.961c.123.133.293.21.47.21a.638.638 0 0 0 .47-.21l4.55-4.962a.695.695 0 0 0-.022-.956.632.632 0 0 0-.92.021L8 6.858zm0 5.684L3.921 8.095a.633.633 0 0 0-.919-.023.695.695 0 0 0-.02.956L7.53 13.99a.634.634 0 0 0 .94 0l4.55-4.962a.697.697 0 0 0-.022-.957.633.633 0 0 0-.92.023L8 12.544z"/></svg>
              <svg viewBox="0 0 16 16" id="angle-double-up"><path d="M8 9.54l-4.079 4.449a.632.632 0 0 1-.919.021.696.696 0 0 1-.022-.956l4.55-4.961a.638.638 0 0 1 .47-.21c.178 0 .348.077.47.21l4.55 4.962a.695.695 0 0 1-.022.956.632.632 0 0 1-.92-.021L8 9.54zm0-5.685L3.921 8.303a.633.633 0 0 1-.919.023.695.695 0 0 1-.02-.956L7.53 2.408a.634.634 0 0 1 .94 0l4.55 4.962a.697.697 0 0 1-.022.957.633.633 0 0 1-.92-.023L8 3.854z"/></svg>
            </div>
          </div>
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App
