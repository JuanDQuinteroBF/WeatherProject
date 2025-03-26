interface ListProps {
    children?: React.ReactNode;
    className?: string;
    value?: string;
    id?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
    onAbort?: React.ReactEventHandler<HTMLLIElement>;
    onMouseOver?: (e: React.MouseEvent<HTMLLIElement>) => void;

}

export const List: React.FC<ListProps> = ({
    children,
    className,
    id,
    value,
    style,
    onClick,
    onAbort,
    onMouseOver
}) => {
    return <li className={className}
    value={value}
    id={id}
    style={style}
    onClick={onClick}
    onAbort={onAbort}
    onMouseOver={onMouseOver}>
        {children}
    </li>
}