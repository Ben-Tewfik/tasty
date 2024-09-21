import { useGlobalContext } from "@/contexts/RecipesContext";
import ProfileSettings from "./ProfileSettings";
import Image from "next/image";
import userProfile from "../public/profile.svg";

const UserProfile = () => {
  const { currentUser } = useGlobalContext();

  return (
    <section className="p-4">
      <div className="bg-grey mb-2 p-3 flex items-center gap-4 rounded-md max-w-[1170px] mx-auto">
        <Image src={userProfile} className="w-28" alt="user profile image" />
        <p className="font-semibold text-xl">Hi,{currentUser?.email}</p>
      </div>
      <ProfileSettings />
    </section>
  );
};
export default UserProfile;
