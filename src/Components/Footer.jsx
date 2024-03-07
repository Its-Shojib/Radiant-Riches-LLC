import { FaAngleDown } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-neutral text-neutral-content">
            <footer className="footer w-10/12 mx-auto p-10 pb-20">
                <nav>
                    <h6 className="text-xl font-semibold text-gray-300">Categories</h6>
                    <a className="link link-hover">Web Builder</a>
                    <a className="link link-hover">Hosting</a>
                    <a className="link link-hover">Data Center</a>
                    <a className="link link-hover">Robotic-Automation</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold text-gray-300">Contact</h6>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms Of Service</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold text-gray-300 pt-10">United States <FaAngleDown className="inline font-bold" /></h6>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;