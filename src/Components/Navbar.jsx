import { CiSearch } from "react-icons/ci";

const Navbar = () => {

    let links = <>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Website Builders</li>
        <li className="cursor-pointer">{`Today's deals`}</li>
    </>
    return (
        <div className="navbar bg-[#02033bdf] flex justify-center items-center">
            <div className="relative flex gap-10">
                <input
                    type="text"
                    className="px-4 py-2 outline-none rounded-md w-24 md:w-auto placeholder:text-xl pl-8" />
                <CiSearch className="absolute text-2xl top-2 left-2 cursor-pointer" />
                <ul className="flex justify-center items-center gap-5 text-white ">
                    {links}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;