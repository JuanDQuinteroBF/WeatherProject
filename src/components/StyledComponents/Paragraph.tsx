interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  style?: React.CSSProperties;
  dir?: string;
  lang?: string;
  datatype?: string;
  onClick?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  onCopy?: (e: React.ClipboardEvent<HTMLParagraphElement>) => void;
  onCut?: (e: React.ClipboardEvent<HTMLParagraphElement>) => void;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  id,
  title,
  style,
  dir,
  lang,
  datatype,
  onClick,
  onMouseDown,
  onCopy,
  onCut,
}) => {
  return (
    <p
      className={className}
      id={id}
      title={title}
      style={style}
      dir={dir}
      lang={lang}
      datatype={datatype}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onCopy={onCopy}
      onCut={onCut}
    >
      {children}
    </p>
  );
};
