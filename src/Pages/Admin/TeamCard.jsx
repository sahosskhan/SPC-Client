

// eslint-disable-next-line react/prop-types
const TeamCard = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const {name, image, category,jersey} = items;
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
                className="w-full h-[500px] bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{backgroundImage: `url(${image})`}}
            />
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
                <h3 className="py-2 text-lg font-bold tracking-wide text-center text-gray-800 ">
                    {name}
                </h3>
                <div className="flex items-center justify-between px-3 py-2 bg-sky-300">
                <h1 className=" bg-sky-700 text-white p-2 rounded-btn">
                        {jersey}
                    </h1>

                    <span className="font-bold text-gray-800">
                        {category}
                    </span>
                  
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
