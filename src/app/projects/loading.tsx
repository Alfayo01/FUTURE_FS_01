export default async function Loading(){
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (<div className="backdrop-blur-2xl animate-pulse w-full h-500 bg-gray ease-in-out"></div>)
}