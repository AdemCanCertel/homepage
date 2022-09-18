import ms from "ms";
import Image from "next/image";
import Link from "next/link";
import { getPhotos } from "../lib/unsplash";

function PhotosPage({ data }) {
  return (
    <div className="full-container">
      <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-white text-black">
        Photos
      </h1>
      <div>
        <p>I share very few photos.</p>
      </div>
      <figure className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
        <span className="relative box-border block overflow-hidden opacity-100 ">
          <span className="box-border block opacity-100 ">
            {data.map((item) => {
              return (
                <p key={item.id}>
                  <Link href={item.links.html} isExternal>
                    <Image
                      src={item.urls.regular}
                      alt={item.description}
                      width={400}
                      height={400}
                      layout="responsive"
                      className="absolute inset-0 box-border rounded-lg"
                    />
                  </Link>
                </p>
              );
            })}
          </span>
        </span>
      </figure>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPhotos();

  return {
    props: {
      data,
    },
    revalidate: ms("1d") / 1000,
  };
}

export default PhotosPage;
