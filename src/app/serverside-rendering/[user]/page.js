import React from "react";

async function getUserDetails(userId) {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const userData = await response.json();
  return userData;
}

async function UserDetails({ params }) {
  const { user } = await params;
  console.log("", user);
  const userDetails = await getUserDetails(user);

  return (
    <div className="grid place-content-center ">
      <div className="bg-white/40 p-3
       rounded-md text-black">
        <h1>{userDetails.firstName}</h1>
        <p>{userDetails.password}</p>
        <img src={userDetails.image} />
      </div>
    </div>
  );
}

export default UserDetails;
