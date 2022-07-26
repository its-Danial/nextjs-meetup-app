import Link from "next/link";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between py-0 px-2 shadow bg-gray-50 text-slate-800 dark:bg-slate-800  dark:text-slate-300 dark:shadow-md">
      <div className="text-4xl text-blue font-bold ml-5">React Meetups</div>
      <nav>
        <ul className="flex justify-around list-none m-0 p-0">
          <li className="text-xl hover:drop-shadow-xl hover:text-black  dark:hover:text-white font-bold">
            <Link href="/">All Meetups</Link>
          </li>

          <li className="ml-12 mr-16 text-xl hover:drop-shadow-xl hover:text-black dark:hover:text-white font-bold">
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
