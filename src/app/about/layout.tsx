export default function AboutLayout({children}:{ children: React.ReactNode}){
    return (
    <div className="w-full backdrop-lg bg-white/20 sm:w-3/4 md:w-2/3 mx-auto">
        <h1 className="font-bold text-2xl m-auto px-2 mx-4">Professional Details</h1>
        {children}
    </div>
    )
}