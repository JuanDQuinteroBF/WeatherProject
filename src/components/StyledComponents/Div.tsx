export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Div: React.FC<DivProps> = (props) => {
  return <div {...props} />;
};