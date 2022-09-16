import NextImage from "next/image";
import Error from '../static/photos/404.jpg'

export default function error() {
    return (
        <div className='full-container mt-20'>
            <h1 className="text-xl">Unknown page...</h1>
                <p className="font-mono">You're off the site path. Go back to the <a className="text-cyan-600" href="/">home page</a></p>
                <div className="mt-3 mb-3">
                <NextImage
                        src={Error}
                        quality={100}
                        width={40}
                        height={30}
                        layout="responsive"
                        className="rounded-md"
                />
                </div>
        </div>
    )
  }