interface FormProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  name?: string;
  action?: string;
  style?: React.CSSProperties;
  autoCapitalize?: string;
  autoComplete?: string;
  rel?: string;
  encType?: string;
  method?: string;
  target?: string;
  acceptCharset?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onDrag?: (e: React.DragEvent<HTMLFormElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLFormElement>) => void;
}


export const Form: React.FC<FormProps> = ({
  children,
  id,
  className,
  name,
  action,
  style,
  autoCapitalize,
  autoComplete,
  rel,
  encType,
  method,
  target,
  acceptCharset,
  onSubmit,
  onDrag,
  onClick,
}) => {
  return (
    <form
      id={id}
      name={name}
      className={className}
      action={action}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      rel={rel}
      style={style}
      encType={encType}
      method={method}
      target={target}
      acceptCharset={acceptCharset}
      onSubmit={onSubmit}
      onDrag={onDrag}
      onClick={onClick}
    >
      {children}
    </form>
  );
};
