import React from 'react'

async function page({searchParams}) {
  const search = await searchParams;
  console.log(search.search);
  
  return (
    <div>
      Products page
    </div>
  )
}

export default page
