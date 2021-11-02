import React from 'react';

const createLinkElementWithKey = (key) => {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
};

const getClassNameForKey = (key) => `style-manager-${key}`;

const getExistingLinkElementByKey = (key) => document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);

const getLinkElementForKey = (key) => getExistingLinkElementByKey(key) || createLinkElementWithKey(key);

const setStyle = (key = 'theme', path = 'white') => {
  getLinkElementForKey(key).setAttribute('href', `assets/themes/${path}.css`);
}

const removeStyle = (key = 'theme') => {
  const existingLinkElement = getExistingLinkElementByKey(key);
  if (existingLinkElement) {
    document.head.removeChild(existingLinkElement);
  }
}

const storeTheme = (key) => {
  try {
    window.localStorage.setItem('theme', key);
  } catch { }
}

const getStoredThemeKey = () => {
  try {
    return window.localStorage['theme'] || null;
  } catch {
    return null;
  }
}

export const ThemeContext = React.createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState(getStoredThemeKey() || 'white');

  const defaultTheme = {
    theme,
    setTheme,
  };

  React.useEffect(() => {
    removeStyle();
    setStyle('theme', theme);
    storeTheme(theme);
    return () => {}
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};