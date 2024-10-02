import { useGlobalContext } from "@/contexts/RecipesContext";
import ProfileSettings from "./ProfileSettings";
import Image from "next/image";
import userProfile from "../public/profile.svg";
import { useState } from "react";

const UserProfile = () => {
  const { currentUser } = useGlobalContext();
  const [imageUrl, setImageUrl] = useState("");
  return (
    <section className="p-4">
      <div className="bg-grey mb-2 p-3 flex items-center gap-4 rounded-md max-w-[1170px] mx-auto">
        <Image
          src={imageUrl ? imageUrl : userProfile}
          width={100}
          height={100}
          priority={true}
          as="image"
          className="w-28"
          alt="user profile image"
        />
        <p className="font-semibold text-xl">Hi,{currentUser?.email}</p>
      </div>
      <ProfileSettings setImageUrl={setImageUrl} />
    </section>
  );
};
export default UserProfile;
