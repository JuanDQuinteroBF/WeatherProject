interface AnchorProps {
    children?: React.ReactNode;
    href?: string;
    className?: string;
    target?: React.HTMLAttributeAnchorTarget;
    id?: string;
    accessKey?: string;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    type?: string;
    title?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Anchor: React.FC<AnchorProps> = ({
    children,
    className,
    href,
    target,
    id,
    accessKey,
    referrerPolicy,
    type,
    title,
    style,
    onClick,
    onMouseEnter
}) => {
    return <a className={className}
    href={href}
    target={target}
    id={id}
    accessKey={accessKey}
    referrerPolicy={referrerPolicy}
    type={type}
    title={title}
    style={style}
    onClick={onClick}
    onMouseEnter={onMouseEnter}>
        {children}
    </a>
}