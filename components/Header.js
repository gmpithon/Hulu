import Image from "next/image"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
import HeaderItems from "./HeaderItems"

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title='Home' Icon={HomeIcon} />
                <HeaderItems title='Trending' Icon={LightningBoltIcon} />
                <HeaderItems title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItems title='Collections' Icon={CollectionIcon} />
                <HeaderItems title='Search' Icon={SearchIcon} />
                <HeaderItems title='Account' Icon={UserIcon} />
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6" alt=" "
                width={200} height={100} />
            
        </header>
    )
}

export default Header
