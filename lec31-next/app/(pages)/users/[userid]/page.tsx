

export default async function page({params}:{params:Promise<{userid:string}>}) {
    const {userid} = await  params
    console.log(typeof userid)
  return (
    <div>User ID : {userid}</div>
  )
}
