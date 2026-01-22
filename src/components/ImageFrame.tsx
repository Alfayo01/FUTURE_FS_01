import Image from "next/image"
import { Suspense } from "react";

export interface Picture {
    src: string;
    width: number;
    height: number;
    alt: string;
    children?: React.ReactNode;
}

const ImageFrame = ({src, width, height, alt, children}: Picture) => { 
    return (
    <>
        <Suspense fallback={<p>Coming soon..</p>}>
        <Image src={src} width={width} height={height} alt={alt}/>
        {children}
        </Suspense>
    </>
    );
}
export default ImageFrame;
