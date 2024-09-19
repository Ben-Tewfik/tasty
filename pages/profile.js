import { Loader } from "@/components/Loader";
import UserProfile from "@/components/UserProfile";
import { useGlobalContext } from "@/contexts/RecipesContext";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
export default function Profile() {
  const { currentUser, loading } = useGlobalContext();
  const router = useRouter();
  // making the route protective
  useLayoutEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, []);

  if (loading || (!loading && !currentUser)) {
    return (
      <section className="h-[70vh] flex justify-center items-center">
        <Loader />
      </section>
    );
  }

  return (
    <>
      <UserProfile />
    </>
  );
}
