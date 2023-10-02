const Header = () => {
    return (
        <header>
            <div className="container mx-auto px-5">
                <nav className="flex items-center justify-between h-[61px] border-b-2">
                    <ul className="flex items-center gap-x-8">
                        <li>
                            <a href="#">Models</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <button className="grid place-items-center font-[PRegular] text-white bg-[#333] px-[78px] py-[6px] rounded-[20px]">
                        Buyurtirish
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
