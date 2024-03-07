import img from '../../public/image.png'

const Related_Deals = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl'>Related deals you might like for</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* Card-1 */}
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <p className='text-blue-600 my-3'><span className='px-3'>20% Off</span> Limited time </p>
                    <h2 className="text-center font-bold">Webbuilder 1</h2>
                    <p className='text-gray-600 text-sm'>Computer  Modern clasic with wix support</p>
                    <p className='my-3'>
                        <span className='text-xl px-3'>$39.96</span>
                        <span className='text-gray-400 text-sm px-3'>$49.96</span>
                        <span className='text-red-700 text-sm px-3'>(20% Off)</span></p>
                    <div className="card-actions">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-md">View Deals</button>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <p className='text-blue-600 my-3'><span className='px-3'>20% Off</span> Limited time </p>
                    <h2 className="text-center font-bold">Webbuilder 1</h2>
                    <p className='text-gray-600 text-sm'>Computer  Modern clasic with wix support</p>
                    <p className='my-3'>
                        <span className='text-xl px-3'>$39.96</span>
                        <span className='text-gray-400 text-sm px-3'>$49.96</span>
                        <span className='text-red-700 text-sm px-3'>(20% Off)</span></p>
                    <div className="card-actions">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-md">View Deals</button>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <p className='text-blue-600 my-3'><span className='px-3'>20% Off</span> Limited time </p>
                    <h2 className="text-center font-bold">Webbuilder 1</h2>
                    <p className='text-gray-600 text-sm'>Computer  Modern clasic with wix support</p>
                    <p className='my-3'>
                        <span className='text-xl px-3'>$39.96</span>
                        <span className='text-gray-400 text-sm px-3'>$49.96</span>
                        <span className='text-red-700 text-sm px-3'>(20% Off)</span></p>
                    <div className="card-actions">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-md">View Deals</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Related_Deals;