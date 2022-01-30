type ImageProps = {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const Image: React.FunctionComponent<ImageProps> = ({src, width, height, alt}) => {
    return (
        <img src={src} alt={alt} width={width} height={height}></img>
    )
}

export default Image