interface InputProps {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  form?: string;
  style?: React.CSSProperties;
  width?: string | number;
  readonly?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  required?: boolean;
  size?: number;
  formAction?: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  type,
  id,
  form,
  width,
  style,
  readonly,
  maxLength,
  minLength,
  placeholder,
  required,
  size,
  formAction,
  ref,
  onClick,
  onSubmit,
  onKeyDown,
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      id={id}
      form={form}
      width={width}
      style={style}
      readOnly={readonly}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      required={required}
      size={size}
      formAction={formAction}
      ref={ref}
      onClick={onClick}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};
