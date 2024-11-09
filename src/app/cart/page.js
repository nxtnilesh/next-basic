"use client"
import { usePathname, useSearchParams } from "next/navigation";
function Cart() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"),searchParams.get("price"));
  
  return (
    <div>
      Cart page
      <h1>{pathName}</h1>
      {/* <h1>{searchParams}</h1> */}
    </div>
  );
}

export default Cart;
