import PlayBtn from "../../components/UI/PlayBtn/PlayBtn";
import Logo from "./../../components/UI/Icons/Logo";
import jetourmain from "../../assets/images/jetourmain.png";
import ShareBtn from "../../components/UI/ShareBtn/ShareBtn";
const Intro = () => {
    return (
        <div>
            <div className="container">
                <div className="flex flex-col relative">
                    <div className="flex mt-[163px] mb-[78px] gap-x-[97px]">
                        <Logo />
                        <PlayBtn />
                    </div>
                    <div className="w-[1320px] mb-[119px] h-[740px]">
                        <img
                            className="absolute left-[60px]"
                            src={jetourmain}
                            alt=""
                        />
                    </div>
                    <div className="flex ml-[395px] justify-between mb-[192px] items-center">
                        <p className=" text-[#999] text-[48px] leading-[52px] capitalize max-w-[670px]">
                            <span className="text-[#1a1a1a]">JETOUR</span>{" "}
                            yuqori didli insonlar uchun
                        </p>
                        <ShareBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
