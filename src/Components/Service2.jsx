import { IoDiamondOutline } from "react-icons/io5";
import img from '../../public/image.png';
import { FaAngleDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const Service2 = () => {
    return (
        <div>
            <p className="bg-orange-600 text-white p-1 text-sm w-28 rounded-r-md cursor-pointer">
                <IoDiamondOutline className="inline text-xl" /> Best Value</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
                <div className="relative col-span-1">
                    <p className="absolute text-gray-600 top-5 px-2 border-[1px] border-gray-500 rounded-full">2</p>
                    <img src={img} alt="" className="w-8/12 mx-auto mt-5 cursor-pointer" />
                    <p className="absolute text-gray-600 bottom-3 left-20">Builder</p>
                </div>
                <div className="text-[12px] text-gray-600 space-y-3 col-span-2">
                    <p><span className="font-bold">SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>

                    <h3 className="font-bold">Main highlights</h3>
                    <p className="pl-4">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>

                    <p className="text-blue-700 text-sm cursor-pointer">See More <FaAngleDown className="inline font-bold" /></p>
                </div>
                <div className="flex justify-between items-center flex-col col-span-1">
                    <div className="bg-cyan-50 p-2 rounded-b-md text-blue-800 text-center">
                        <p className="text-2xl text-center">9.5</p>
                        <p className="text-sm">Excellent</p>
                        <p className="mx-3">
                            <ReactStars
                                count={5}
                                size={12}
                                activeColor="#ffff00"
                            />
                        </p>
                    </div>
                    <button className="w-full bg-blue-500 rounded-md py-2">View</button>
                </div>
            </div>
        </div>
    );
};

export default Service2;