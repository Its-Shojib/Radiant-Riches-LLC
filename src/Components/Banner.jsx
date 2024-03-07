import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="">
            <h1 className="text-5xl">Best Website builders in the US</h1>
            <hr className="bg-black mt-2" />
            <div className="flex justify-between items-center py-1">
                <div className="flex justify-start items-center gap-5">
                    <p><IoIosCheckmarkCircleOutline className="inline pr-2 text-3xl" /> Last Updated - February 22, 2020 </p>
                    <p><CiCirclePlus className="inline text-2xl" /> Advertising Disclosure</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Banner;