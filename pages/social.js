import Link from "next/link";

export default function SocialPage() {
  return (
    <section className="full-container">
      <h1 className="font-bold text-xl md:text-2xl tracking-tight dark:text-neutral-400 text-neutral-500">
        Social
      </h1>
      <Link href="https://www.instagram.com/ademcancertell/?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>Instagram</h2>
            <p className="text-base">Follow me on Instagram!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            >
            <path 
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              fill="currentColor"
            />
          </svg>
          </div>
        </a>
      </Link>
      <Link href="https://twitter.com/ademcancertell?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>Twitter</h2>
            <p className="text-base">Follow me on Twitter!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </Link>
      <Link href="https://github.com/AdemCanCertel?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>GitHub</h2>
            <p className="text-base">Follow me on GitHub!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UC3sLnNIrakZRPJEOnzCKerQ?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>YouTube</h2>
            <p className="text-base">Subscribe to me on YouTube!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </Link>
      <Link href="https://steamcommunity.com/id/ademcancertel/?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>Steam</h2>
            <p className="text-base">Profile to me on Steam!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12c0 6.627-5.373 12-12 12-5.782 0-10.608-4.091-11.744-9.537l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091 0-2.26-1.834-4.093-4.093-4.093-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51l-6.294-2.646c.708-5.953 5.765-10.572 11.908-10.572 6.627 0 12 5.373 12 12zm-16.577 5.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102s-2.102.943-2.102 2.102c.001 1.159.943 2.101 2.102 2.101z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </Link>
      <Link href="https://www.twitch.tv/ademcancertell?utm_source=ademcancertel.vercel.app">
        <a target="_blank" className="pt-5 flex space-x-4 justify-between">
          <div className="overflow-x-hidden text-xl">
            <h2>Twitch</h2>
            <p className="text-base">Follow me on Twitch!</p>
          </div>
          <div className="flex-shrink-0 text-zinc-600 transition-colors dark:text-zinc-200">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8"
            viewBox="0 0 24 24">
              <path 
                d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" 
                fill="currentColor"
              />
          </svg>
          </div>
        </a>
      </Link>
    </section>
  );
}
