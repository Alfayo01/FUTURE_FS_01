export default function Loading(){
    new Promise(resolve => setTimeout(resolve, 5000))
    return (<div className="backdrop-blur-2xl w-200 h-200 bg-gray ease-in-out"></div>)
}