
const Contact = () => {
    return (
        <div className="my-10 flex flex-col lg:flex-row justify-around items-center gap-10">
            <h1 className="text-3xl max-w-96">Sign up and get exclusive special deals</h1>
            <div>
                <form>
                    <input 
                    type="text"
                    className="p-2 border-y border-l border-black rounded-l-full" />
                    <button className="py-[9px] bg-blue-500 text-white rounded-r-md px-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;