interface ImgProps {
    src?: string
    alt?: string
    style?: React.CSSProperties;
    sizes?: string;
    width?: string | number;
    height?: string | number;
    hidden?: boolean;
    id?: string;
    datatype?: string;
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
    onMouseOver?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export const Img: React.FC<ImgProps> = ({src, 
    alt, 
    style,
    sizes,
    width,
    height,
    hidden,
    id,
    datatype,
    onClick,
    onMouseOver
}) => {
    return <img src={src}
    alt={alt}
    style={style}
    sizes={sizes}
    width={width}
    height={height}
    hidden={hidden}
    datatype={datatype}
    id={id}
    onClick={onClick}
    onMouseOver={onMouseOver} />
}