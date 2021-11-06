import { createContext, useContext, useState } from 'react';

const context = createContext({
  value: '',
  setValue: () => {},
});

const InputProvider = ({ children }) => {
  const [value, setValue] = useState('');
  return (
    <context.Provider value={{ value, setValue }}>
      {children}
    </context.Provider>
  );
};

export const useInput = () => {
  const value = useContext(context);
  return value;
};

export default InputProvider;
