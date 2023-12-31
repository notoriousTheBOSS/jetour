import ModelsLogo from "../../components/UI/Icons/ModelsLogo";
import CardList from "./CardList";

const cardsData = [
    {
        title: "new urban supercar jetour",
        description:
            "Our experienced technicians can diagnose and repair any issues with your car or big machine's engine.",
        image: "https://s3-alpha-sig.figma.com/img/cebf/abd7/c631861bee70630012e4f5db25bb9b07?Expires=1697414400&Signature=qBPab5yn8K8ixLG2Gtl16177gW-UinyMTQ4uqzOQ1Q9v~WexAJhajk-4wb383x8sFR2jnWYDiaYuVif-VxujMisZ1sM2EYVQ06KKKetcX77vEOXxU0PFAgApFFiEaklkeQ7iYMOWqfdcG8fozEmYd3yMkji4drHJ-zLqAlD6cUVmq-y0a~oqgX53lQFeOeftJKgfelnHMQE4Xlt2Yr7QHCgqHwiOb0A9F2Nha4KmBne3p6ZdlQqRj-xk2es421x7dUqoUJLP9l81ORhTNYiD157w0VSpBxvOmP-rkLVjL7fTHpGItK2k8mhW6MKVTuakSy2af8EalKnffA2zEAiDYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "#",
        speed: 190,
        id: 1,
    },
    {
        title: "new urban supercar jetour",
        description:
            "Our experienced technicians can diagnose and repair any issues with your car or big machine's engine.",
        image: "https://s3-alpha-sig.figma.com/img/93db/a05a/cc7ccf5796a0944f5f9e8282e8f22ee7?Expires=1697414400&Signature=BtF~Wzy01ZKmmTdTdRLvUimcgwWcCxFlwc7VQnVJF5ieqN8pWFB4a-rMVNrHG14~ct1UBu0I~2jadGUkq5tWgYt7OGWNl7ohmTH8ywns52JXGi6bUE~4oX7Ve~9fjuGweD3kRNUsQmK77Efy4Fn-notjMRwqO8e5i5PxA-50P123B9Ut~hCW6jCWKy7~DnvqaNL~U1asY~k7A6ouBz0TSP2dmH-gmxO7CdLDwNaVUGYmzs3b-RKa6E8Gr1aKRNWasfm4xzAW-lHlaAdaMy9wXyMlf0zC~HSqB1aFX8CBPr6PeE0M~GDpQlX8xfXmHJNaWnbeEVLjNYmDz~16iG63tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "#",
        speed: 280,
        id: 2,
    },
    {
        title: "new urban supercar jetour",
        description:
            "Our experienced technicians can diagnose and repair any issues with your car or big machine's engine.",
        image: "https://s3-alpha-sig.figma.com/img/2c31/273b/1bd455b20a86e574ec025a0bc6ee3706?Expires=1697414400&Signature=nuwIvsO2o8LdD9XRj1kFPGx-qs3Azg3iQ4yUygQrtCGPBQ3x9IVbh9Hgvku0hpWdGgUCf9OQ4Sbr5H7HorzH3b8NX1ylLLRrHftENNSZaGXGGpVkyamS~Ca-HTpWL5pVkvpQwGKZZC9gSy7hoOsfWHZYxxNv8wTkLb-Q2pAsCOiu153mtgRsqcqVgwjdW7BtGV5Hj~kF87CDzmvvE2DIagjVPMPfpNKMBDerLD~Ixj1YuTgN7owXtC4Jshvfh~L3mbks3pFTXMxeGBV0Kr1NztSj-X9usZnWw-iF~cwm08SITJzq-LJPJ9GbdU4Pm-ZEzM3a-mA8FbFbob0f1pGQDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "#",
        speed: 240,
        id: 3,
    },
    {
        title: "new urban supercar jetour",
        description:
            "Our experienced technicians can diagnose and repair any issues with your car or big machine's engine.",
        image: "https://s3-alpha-sig.figma.com/img/3edd/2ac6/29ef44ecbb8dc8e59697ec8f430fbb19?Expires=1697414400&Signature=gQqdwsX6v0IyUD5kMR4uRwlcRk7X1XN~FveQz9J8GVRfmJ6liGZ9GL3S0yM9f4KIMrP3RsPR1FRS1Kfsz-gQw5cb1J1E4OZPqOKLM2y7GVEvjZbjlIAqFHSw7Pi1q71rVr2axdQp~H1GPceXtDOJsTB1qhoID6Qa4xg9T7d6OstWgGZAoEUDlvlouVUUvu6LYUhVcJshHPV53a3LBH-X5aXSxsQtZfraIj7hjeNWDUAgPfRNvwX4HCVUhlilOEO5if6kd5JKlX4V4vXSkUMoG3wSjjLGP1nWcp~bb2EDIzyHemjIsRRFXso8cHH81709f~o8ZTDKbIERxR41KFm6xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        link: "#",
        speed: 290,
        id: 4,
    },
];

const Models = () => {
    return (
        <div>
            <div className="container">
                <div className="pb-[20px] w-full border-b-[#CCC] border-b-[1px]">
                    <ModelsLogo />
                </div>
                <CardList cards={cardsData} />
                <div className="flex mt-[44px] mb-[120px] relative">
                    <button className="w-[192px] justify-center h-[192px] rounded-full bg-[#f0f0f0] absolute left-[738px] active:translate-x-[148px] transition-[4000] flex items-center flex-col">
                        <p className="font-[PMedium] text-[20px] text-[#666]">
                            Discover
                        </p>
                        <div className="my-[16px] bg-[#ccc] w-[120px] h-[1px]"></div>
                        <div className="p-2 flex items-center">
                            <svg
                                width="41"
                                height="32"
                                viewBox="0 0 41 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 16H40M40 16L39.2623 15.953C30.8452 15.4172 24.2926 8.43412 24.2926 0V0M40 16L39.2623 16.047C30.8452 16.5828 24.2926 23.5659 24.2926 32V32"
                                    stroke="#1A1A1A"
                                    stroke-width="3"
                                />
                            </svg>
                        </div>
                    </button>
                    <button className="w-[192px] h-[192px] rounded-full border-[#999] border-[1px] ml-[886px]"></button>
                </div>
            </div>
        </div>
    );
};

export default Models;
