const CardSkeleton = () => {

    return (
                <div className="border rounded-lg backdrop-blur-2xl animate-pulse grayscale-25 bg-amber-50 p-4 m-auto">
                    <div className="flex justify-between items-start">
                        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                    </div>
                        <div className="mt-4 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-32"></div>
                        </div>
                    </div>

)
};
export default CardSkeleton