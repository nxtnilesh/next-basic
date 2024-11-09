import { redirect } from "next/navigation";
export default function Account() {
  const userProfile = "";
  if (!userProfile) redirect("profile");
  return <div>Account Page</div>;
}
