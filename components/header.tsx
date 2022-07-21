import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
 const { data: session, status } = useSession();
 const loading = status === "loading";

 const handleSignIn = () => signIn("github");

 return (
  <header className="relative bg-white">
   <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <nav className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
     <Logo />
     <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
      {!session && (
       <>
        <span>You are not signed in</span>
        <button
         onClick={handleSignIn}
         className="relative flex justify-center px-4 py-2 mt-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md outline-none group w-28 hover:bg-indigo-700 focus:outline-none"
        >
         SIgn In
        </button>
        <button
         onClick={() => signOut()}
         className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
        >
         Sign in
        </button>
       </>
      )}
      {session && session?.user?.image && (
       <>
        <img
         src={session.user.image}
         className="w-16 h-16 rounded-full"
         alt=""
        />
        <button
         onClick={() => signOut()}
         className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
        >
         Logout
        </button>
       </>
      )}
     </div>
    </nav>
   </div>
  </header>
 );
}
