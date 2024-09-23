import { useGlobalContext } from "@/contexts/RecipesContext";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdLockOutline, MdAddAPhoto } from "react-icons/md";

export default function ProfileSettings() {
  const { currentUser } = useGlobalContext();
  const [image, setImage] = useState("");
  const profileRef = useRef(null);
  // function to add profile image
  function handleImageClick() {
    profileRef.current.click();
  }
  // function to store the uploaded image in the state
  // function handleImageChange(e) {
  //   console.log(e.target.files[0]);
  // }
  return (
    <div className="bg-grey rounded-md pb-7 px-3 max-w-[1170px] mx-auto">
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
        {/* add profile image */}
        <div className="w-56 mx-auto">
          <h3 className="capitalize font-bold mb-3">add image</h3>
          <div
            onClick={handleImageClick}
            className="bg-white flex items-center justify-center p-7 rounded-md"
          >
            <div>
              <span className="bg-grey relative border-4 w-20 h-20 flex items-center justify-center mb-4 rounded-full border-red">
                {image ? (
                  <Image
                    src={URL.createObjectURL(image)}
                    fill
                    alt="Profile Image"
                    className="object-cover rounded-full"
                  />
                ) : (
                  <MdAddAPhoto size={50} className="text-red" />
                )}
              </span>
              <input
                type="file"
                id="profile"
                ref={profileRef}
                className="hidden"
                onChange={e => setImage(e.target.files[0])}
              />
              <label htmlFor="profile" className="capitalize font-bold">
                profile photo
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
