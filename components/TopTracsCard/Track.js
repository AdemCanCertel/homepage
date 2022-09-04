import Link from 'next/link';

export default function Track({ title, artist, id }) {
  return (
  <div className="space-y-3 line-clamp-3 md:line-clamp-none">
    <div className="text-gray-500 transform origin-center font-inter tracking-wider hidden xs:inline-flex">
       #{id + 1}
    </div>
   <div>
     <h2 className="text-xl text-black dark:text-white">
       {title}
     </h2>
     <strong className="text-neutral-700 dark:text-neutral-200">
       {artist}
     </strong>
   </div>
     <hr className="w-56 opacity-5"/>
  </div>
  );
}