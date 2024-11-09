"use client"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());
async function ClientSide() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  // const user = await fetch("'https://dummyjson.com/users")
  //   const user = await getUserDetails();
  return <div>ClientSide</div>;
}

export default ClientSide;
