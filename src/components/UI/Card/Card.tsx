import { FC } from "react";
import InToBtn from "../InToBtn/InToBtn";

interface CardPROPS {
    title: string;
    description: string;
    image: string;
    link: string;
    speed: number;
    id: number;
}

const Card: FC<CardPROPS> = ({
    title,
    description,
    image,
    link,
    speed,
    id,
}) => {
    return (
        <div className="py-[40px] flex items-center gap-[132px] border-b-[#CCC] border-b-[1px]">
            <div className="max-w-[650px] w-full rounded-xl h-[400px] grid place-items-center  bg-[#e6e6e6] ">
                <img className="max-w-[560px]" src={image} alt="" />
            </div>
            <div className="flex flex-col items-start gap-[240px] max-h-[400px] h-full">
                <p className="text-[#999] text-[18px] uppercase flex leading-6">
                    {speed} KM/s <p>{id}</p>{" "}
                </p>
                <div className="flex flex-col gap-5">
                    <h2 className="uppercase text-[#1a1a1a] leading-[32px] text-[24px] max-w-[402px]">
                        {title}
                    </h2>
                    <div className="flex gap-x-[24px]">
                        <p className="leading-[24px] font-[PRegular] text-[#666]  max-w-[458px] w-full">
                            {description}
                        </p>
                        <a href={link} target="_blank">
                            <InToBtn />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
