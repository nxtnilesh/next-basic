import Link from "next/link";
import React from "react";

async function ServerSide() {
  const userData = await fetch("https://dummyjson.com/users");
  const data = await userData.json();
  // console.log(data.users);

  return (
    <div>
      {data.users.map((user) => (
        <div>
          <Link key={user.id} href={`/serverside-rendering/${user.id}`}>
            {user.username}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ServerSide;
