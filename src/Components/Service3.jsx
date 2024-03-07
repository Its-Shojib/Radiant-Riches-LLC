import img from '../../public/image.png';
import { FaAngleDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component"

const Service3 = () => {
    return (
        <div className='my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
                <div className="relative col-span-1">
                    <p className="absolute text-gray-600 top-5 px-2 border-[1px] border-gray-500 rounded-full">3</p>
                    <img src={img} alt="" className="w-8/12 mx-auto mt-5 cursor-pointer" />
                    <p className="absolute text-gray-600 lg:bottom-7 left-40 md:left-24 lg:left-20">Builder 1</p>
                </div>
                <div className="text-[12px] text-gray-600 space-y-3 col-span-2">
                    <p><span className="font-bold">WixPro 72-Inch Responsive Website Builder-</span>  Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <h3 className="font-bold">Main highlights</h3>
                    <p className="pl-4">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <p className="text-blue-700 text-sm cursor-pointer">See More <FaAngleDown className="inline font-bold" /></p>
                </div>
                <div className="flex justify-between items-center flex-col col-span-1 gap-5">
                    <div className="bg-cyan-50 p-2 rounded-b-md text-blue-800 text-center">
                        <p className="text-2xl text-center">9.3</p>
                        <p className="text-sm">Exceptional</p>
                        <p className="mx-3">
                            <ReactStars
                                count={5}
                                size={12}
                                activeColor="#ffff00"
                            />
                        </p>
                    </div>
                    <button className="w-full bg-blue-500 rounded-md py-2 text-white">View</button>
                </div>
            </div>
        </div>
    );
};

export default Service3;