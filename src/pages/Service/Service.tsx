import AUJetour from "../../components/UI/Icons/AUJetour";
import ServiceLogo from "../../components/UI/Icons/ServiceLogo";

const Service = () => {
    return (
        <div>
            <div className="container">
                <div className="border-t-[#ccc] border-t-[1px] py-[20px] border-b-[#ccc] border-b-[1px] flex">
                    <ServiceLogo />
                    <ul></ul>
                </div>
            </div>
            <div className="mx-auto max-w-[1440px]">
                <div className=" my-[90px] max-w-[1360px] px-[60px] flex mx-auto items-center justify-between">
                    <img
                        className="rounded-[300px] w-[650px] h-[360px]"
                        src="https://s3-alpha-sig.figma.com/img/3c9d/82a6/e252a1ee77d1e5985ddf503d337c361e?Expires=1697414400&Signature=OYPQZu-qBP6o2KxoiSvJDKjsGbXdgxyA8VvTD4hgytoZdhKIkQNq6Kf31I60lC-L300hQ03Rsvuyb~ZwEQqDD0nb6tNz56-Sxx8yCZvFDCNDWosD1AEjy0HzmdhqQzPYuOhls~s9462q6sh1yK7d1Vhz1~Jc0CrlTZfms9QG5N0GG9zue4-GYAK6K-A157rOxQ6crTKwj6WSyrbLU1EI~jbzpAAdqeSdLZn7Qdy82HhcGODa5wzPFT2T-K3i9QQAMV2Y1yJt2-6gnNPJHgKeDSV1gRbMbLUmeToes-3yMca4IdaJ71-3XjW6CqY6O11FvOnykUucIrFHUCSDsBCpCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                    />
                    <div className="max-w-[538px]">
                        <AUJetour />
                        <div className="flex flex-col gap-y-[12px] font-[PRegular]">
                            <input
                                type="text"
                                className="mt-[67px] w-full h-[48px] py-[12px] pl-[20px] bg-[#e6e6e6] rounded-xl outline-none "
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                className="w-full h-[48px] py-[12px] pl-[20px] bg-[#e6e6e6] rounded-xl outline-none"
                                placeholder="Phone"
                            />
                            <button className="text-white py-[12px] rounded-xl w-full grid place-content-center font-[PRegular] bg-black">
                                Yuborish
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#e6e6e6] mx-auto px-[60px] w-full pt-[40px] pb-[55px] h-[224px] rounded-ss-[12px] rounded-se-[12px]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[32px] text-black">Uzbekistan</h3>
                        <div className="font-[PRegular] flex items-center text-[#666] w-[884px] justify-between">
                            <button
                                className="bg-white px-[20px] py-[8px] rounded-[20px] font-[PMedium] min-w-[165px]"
                                placeholder=""
                            >
                                <a href="tel:+(91) 033 30 03">
                                    +(91) 033 30 03
                                </a>
                            </button>
                            <button className="bg-white  py-[8px] rounded-[20px] px-5">
                                Toshkent sh. Sergeli 2-mavze, 5-metro bekati
                            </button>
                            <button className="bg-white px-[20px] py-[8px] rounded-[20px] min-w-[238px]">
                                jetour.uzbekistan@gmail.com
                            </button>
                        </div>
                    </div>
                    <span className="mx-auto block w-[1320px] my-[20px] h-[1px] bg-[#CCC]"></span>
                    <div className="flex items-center justify-between">
                        <button className="px-[173px] py-[10px] rounded-[30px] bg-black text-white font-[PRegular]">
                            <a href="">Facebook</a>
                        </button>
                        <button className="px-[173px] py-[10px] rounded-[30px] bg-black text-white font-[PRegular]">
                            <a href="">Instagram</a>
                        </button>
                        <button className="px-[173px] py-[10px] rounded-[30px] bg-black text-white font-[PRegular]">
                            <a href="">Telegram</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
