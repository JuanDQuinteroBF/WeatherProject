export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
      | 'link';
    variant?: 'outlined' | 'filled';
    size?: 'btn-lg' | 'btn-sm'
  }
  
  export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    size = '',
    ...rest
  }) => {
    return <button className={`btn ${className} btn-${variant} ${size}`} {...rest} />;
  };