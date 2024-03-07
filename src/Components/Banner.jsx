import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="">
            <h1 className="text-5xl">Best Website builders in the US</h1>
            <hr className="bg-black mt-2" />
            <div className="flex justify-between items-center text-sm">
                <div className="flex justify-start items-center gap-5">
                    <p><IoIosCheckmarkCircleOutline className="inline pr-2 text-3xl" /> Last Updated - February 22, 2020 </p>
                    <p><CiCirclePlus className="inline text-2xl" /> Advertising Disclosure</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Top Relevant</summary>
                                <ul className="px-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="my-3 space-y-5 font-semibold text-gray-600">
                <ul className="flex justify-start items-center gap-12 flex-wrap font-semibold ">
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>
                <p>{`Home > Hosting for all > Hosting > Hosting6 > Hosting5`}</p>
            </div>
        </div>
    );
};

export default Banner;