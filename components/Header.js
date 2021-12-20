import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderItem active Icon={HomeIcon} />
          <HeaderItem Icon={FlagIcon} />
          <HeaderItem Icon={PlayIcon} />
          <HeaderItem Icon={ShoppingCartIcon} />
          <HeaderItem Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        {session && (
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
          />
        )}

        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
