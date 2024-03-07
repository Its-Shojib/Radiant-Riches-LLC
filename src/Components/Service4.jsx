import img from '../../public/image.png';
import { FaAngleDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { TiTick } from "react-icons/ti";

const Service4 = () => {
    return (
        <div className='my-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
                <div className="relative col-span-1">
                    <p className="absolute text-gray-600 top-5 px-2 border-[1px] border-gray-500 rounded-full">4</p>
                    <img src={img} alt="" className="w-8/12 mx-auto pt-10 cursor-pointer" />
                    <p className="absolute text-gray-600 top-36 left-[90px]">CDK</p>
                </div>
                <div className="text-[12px] text-gray-600 space-y-3 col-span-2">
                    <p><span className="font-bold">CDK Resposive Builder: </span>An extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <p className='text-blue-600'>26% Off</p>

                    <h3 className="font-bold">Main highlights</h3>
                    <ul className="pl-4 bg-gray-200 p-2 rounded-md">
                        <li><span className='text-blue-600 pr-2'>9.9</span> Building responsive</li>
                        <li><span className='text-blue-600 pr-2'>8.9</span> Cool</li>
                        <li><span className='text-blue-600 pr-2'>8.9</span> Docs</li>
                    </ul>
                    <p>Why we love it</p>
                    <ul>
                        <li><span 
                        className='text-blue-600 pr-2'>
                            <TiTick className='inline' /></span>Documentation</li>
                        <li><span 
                        className='text-blue-600 pr-2'>
                            <TiTick className='inline' /></span>Easy Use</li>
                        <li><span 
                        className='text-blue-600 pr-2'>
                            <TiTick className='inline' /></span>Out Of Box</li>
                    </ul>

                    <p className="text-blue-700 text-sm cursor-pointer">See More <FaAngleDown className="inline font-bold" /></p>
                </div>
                <div className="flex justify-between items-center flex-col col-span-1">
                    <div className="bg-cyan-50 p-2 rounded-b-md text-blue-800 text-center">
                        <p className="text-2xl text-center">9.1</p>
                        <p className="text-sm">Very Good</p>
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

export default Service4;