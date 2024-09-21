import { useGlobalContext } from "@/contexts/RecipesContext";
import { MdLockOutline } from "react-icons/md";

export default function ProfileSettings() {
  const { currentUser } = useGlobalContext();
  return (
    <div className="bg-grey rounded-md px-3 max-w-[1170px] mx-auto">
      <form>
        <div className="p-4 flex justify-between items-center">
          <h1 className="capitalize font-bold text-xl">personal info</h1>
          <button className="capitalize bg-red text-white py-2 px-4 rounded-md font-semibold">
            save changes
          </button>
        </div>
        <p className="flex gap-2 mb-4">
          <MdLockOutline size={25} />
          Only you can see the information on this page. It will not be
          displayed for other users to see.
        </p>
        <h2 className="capitalize font-bold text-xl mb-4">my basic info</h2>
        <label htmlFor="email" className="block capitalize font-bold mb-1">
          email address
        </label>
        <input
          type="email"
          id="email"
          className=" py-2 px-2 rounded-md w-full mb-2 max-w-[500px]"
          placeholder={currentUser?.email}
        />

        <label
          htmlFor="firstName"
          className="block capitalize font-bold mb-1 grow"
        >
          first Name
        </label>
        <input
          type="text"
          id="firstName"
          className="grow py-2 px-2 rounded-md w-full max-w-[500px] mb-2"
          placeholder="First Name"
        />
        <label
          htmlFor="lastName"
          className="block capitalize font-bold mb-1 grow"
        >
          last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="grow py-2 px-2 rounded-md w-full max-w-[500px] mb-2"
          placeholder="Last Name"
        />

        <label
          htmlFor="displayName"
          className="block capitalize font-bold mb-1"
        >
          display Name
        </label>
        <input
          type="text"
          id="displayName"
          className=" py-2 px-2 rounded-md w-full max-w-[500px] mb-2"
          placeholder="Display Name"
        />
        {/* this is for image to see how add a div later */}
        <p>add image</p>
      </form>
    </div>
  );
}