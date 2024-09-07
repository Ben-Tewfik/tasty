import { useGlobalContext } from "@/contexts/RecipesContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProfileDropdown() {
  const [error, setError] = useState("");
  const { logout } = useGlobalContext();
  const router = useRouter();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      router.push("/");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <div className="absolute  top-9 right-0 w-24 rounded-md border-grey shadow-md border-2 bg-white">
      <ul className="capitalize">
        <li className="hover:bg-grey p-2">profile</li>
        <li className="hover:bg-grey p-2" onClick={handleLogout}>
          logout
        </li>
      </ul>
    </div>
  );
}