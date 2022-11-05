import Link from "next/link"

export default function Navbar(){
    return(
        <div className="py-5">
            <ul className="lg:flex justify-between w-9/12 text-center text-base cursor-pointer lg:w-7/12 mx-auto py-5 text-gray-200 glassmorph rounded-md lg:px-36">
                <Link href={{pathname: '/'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer font-bold text-xl -mt-1">SpyMusic</li></Link>
                <Link href={{pathname: '/authors'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Authors</li></Link>
                <Link href={{pathname: '/categories'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Categories</li></Link>
                <Link href={{pathname: '/upload'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Upload</li></Link>
                <Link href={{pathname: '/faq'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">FAQ</li></Link>
            </ul>
        </div>
    )
}