import React from 'react';

import styles from './Input.module.css';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = 'Type something...',
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
