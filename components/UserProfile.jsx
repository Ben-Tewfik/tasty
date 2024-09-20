import { MdLockOutline } from "react-icons/md";

const UserProfile = () => {
  return (
    <section className="p-4">
      <div className="bg-grey rounded-md px-3">
        <form>
          <div className="p-4 flex justify-between items-center">
            <h1 className="capitalize font-bold text-xl">personal info</h1>
            <button className="capitalize bg-red text-white py-2 px-4 rounded-md font-semibold">
              save changes
            </button>
          </div>
          <p className="flex gap-2 mb-2">
            <MdLockOutline size={25} />
            Only you can see the information on this page. It will not be
            displayed for other users to see.
          </p>
          <h2 className="capitalize font-bold text-xl mb-4">my basic info</h2>
          <label htmlFor="email" className="block capitalize font-bold mb-1">
            email
          </label>
          <input type="email" id="email" />
          <label
            htmlFor="firstName"
            className="block capitalize font-bold mb-1"
          >
            first Name
          </label>
          <input type="text" id="firstName" />
          <label htmlFor="lastName" className="block capitalize font-bold mb-1">
            last Name
          </label>
          <input type="text" id="lastName" />
          <label
            htmlFor="displayName"
            className="block capitalize font-bold mb-1"
          >
            display Name
          </label>
          <input type="text" id="displayName" />
          {/* this is for image to see how add a div later */}
          <p>add image</p>
        </form>
      </div>
    </section>
  );
};
export default UserProfile;
