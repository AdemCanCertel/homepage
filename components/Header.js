import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link"
import Button from "../components/Button";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nav = [
    { label: 'Home', path: '/'},
    { label: 'Blog', path: '/blog'},
    //{ label: 'Bookmarks', path: '' }
  ];
  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
  
    if(currentTheme === 'dark') {
      return (
        <Button className="w-9 h-9 dark:bg-neutral-800 hover:ring-1 ring-neutral-800 rounded-md border-none"
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="w-9 h-9 bg-gray-200 hover:ring-1 ring-neutral-200 rounded-md border-none"  
        onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </Button>
      )
    }

  }

  return (
    <div className="pt-5 pb-5 pl-1 flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between relive">
        <div className="ml-[-0.10rem]"> 
        {nav.map(nav => (
          <Link href={nav.path}>
          <a
            className="full-container leading-snug shine px-5 py-2 text-[#48484a] dark:text-[#aeaeb2] dark:hover:text-[#aeaeb2]  hover:text-black transition-all"
          >
            {nav.label}
          </a>
          </Link>
        ))}
        </div>
        {renderThemeChanger()}
      </nav>
    </div>
  )
}

export default Header