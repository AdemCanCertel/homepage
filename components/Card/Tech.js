import { TbBrandNextjs } from 'react-icons/Tb';
import { FaReact } from 'react-icons/Fa';
import { SiTypescript, SiVisualstudiocode, SiJavascript } from 'react-icons/Si';


export default function TechPage() {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-col-4 gap-x-2 gap-y-2">
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <SiJavascript className='w-5 h-5 text-[#FFD700]'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>JavaScript</span>
                </div>
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <SiTypescript className='w-5 h-5 text-[#367dcb]'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>TypeScript</span>
                </div>
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <FaReact className='w-5 h-5 text-[#30d5c8]'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>React.js</span>
                </div>
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <TbBrandNextjs className='w-5 h-5 text-black'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>Next.js</span>
                </div>

                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <SiVisualstudiocode className='w-5 h-5 text-[#1e94e8]'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>VS Code</span>
                </div>
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" height="2500" viewBox="0 0 200 300" width="1667"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" fill="#ff7262"/><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/></svg>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>Figma</span>
                </div>
                <div className="dark:text-gray-300/80 bg-gray-100/10 rounded-md flex items-center space-x-2 overflow-hidden">
                    <div className='p-2 rounded flex items-center justify-center'>
                        <img className='w-5 h-5' src='https://damassets.autodesk.net/content/dam/autodesk/www/products/responsive-imagery/responsive-badges-compare/2017/autocad-2017-badge-75x75.png'/>
                    </div>
                    <span className='flex-1 text-gray-600 dark:text-gray-400'>AutoCAD</span>
                </div>
            </div>
        </div>
    )
}