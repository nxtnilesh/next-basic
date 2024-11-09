import { redirect } from "next/navigation";
export default function Account() {
  const userProfile = "";
  if (!userProfile) redirect("/cart?search=product1&price=123");
  return <div>Account Page</div>;
}
