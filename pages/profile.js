import { Loader } from "@/components/Loader";
import UserProfile from "@/components/UserProfile";
import { useGlobalContext } from "@/contexts/RecipesContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Profile() {
  const { currentUser, loading } = useGlobalContext();
  const router = useRouter();
  // making the route protective
  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/");
    }
  }, [currentUser, loading, router]);

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
