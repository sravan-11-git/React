const Shimmer = () => {
    
    return (
    <div className="flex flex-wrap ml-7">

                {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="m-4 p-4 w-[250px] h-40 bg-slate-300"></div>
                    ))}
    </div>
    )
}

export default Shimmer;