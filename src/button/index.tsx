import React from 'react';
// import styles from './index.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IMidCourtUIButtonProps> = (
  {
    primary,
    backgroundColor,
    size,
    label,
    ...props
  }) => {
  return (
    <button
      type="button"
      className={'flex'}

      {...props}
    >
      {label}
    </button>
  );
};

interface IMidCourtUIButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean,
  /**
   * What background color to use
   */
  backgroundColor: string,
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large',
  /**
   * Button contents
   */
  label: string,

  /**
   * Optional click handler
   */
  onClick(): void,
}
