async function Details({params}) {
  const slug = await params
  console.log(slug);
  
  return (
    <div>
      Products Details
    </div>
  )
}

export default Details
