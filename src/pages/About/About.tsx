import AUJetour from "../../components/UI/Icons/AUJetour";
import AboutUsLogo from "../../components/UI/Icons/AboutUsLogo";

const About = () => {
    return (
        <div className="mb-[160px]">
            <div className="container">
                <div className="pb-[20px] w-full border-b-[#CCC] border-b-[1px]">
                    <AboutUsLogo />
                </div>
                <div className="flex flex-col mt-6 gap-5">
                    <div className="flex gap-5">
                        <img
                            className="w-[762px] h-[360px] rounded-xl"
                            src="https://s3-alpha-sig.figma.com/img/312a/81e5/9135d293326582ab7922d3faa762e95f?Expires=1697414400&Signature=JOWsaCOabuh6ti2H18VLgEzOpHbBp5UUhzw7ZkY0la9omdUW-6IKCW3SmsCjxSgHGwvHYftV-lHkCiBDKpWv-EVMj6pDbXOhADqYQn9gZ-uNwGw~6uQct6cS26Au6XFRPtPKFIOuNQ5~fNCIUS6wIXHa34XAru7tq69eC9BaEVC~1vs~1OjjZXyPLFsMpSfJ1LmmZ~nAD0sv7iWtxYd63G~U1F9P~tSk2uQU0NEA9NIwsCpoAUaD4~6BRYEq~KcArzicEmvWFRvB6fAuISiNQHVfpv1O~LGnnR5zb1pUdYcZteHSY4O7uMSTuXPeXtWYB54zZpP3djnwbsCLqUBVNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                        />
                        <div className="relative bg-gray-400 w-[538px] rounded-xl flex flex-col">
                            <button className="w-[52px] h-[52px] ml-[455px] mt-[30px] grid place-items-center">
                                <svg
                                    width="42"
                                    height="41"
                                    viewBox="0 0 42 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.38478 39.0117L39.1543 2.24218M39.1543 2.24218H2.38478M39.1543 2.24218V39.0117"
                                        stroke="white"
                                        stroke-width="4"
                                    />
                                </svg>
                            </button>

                            <p className="absolute uppercase text-white text-[32px] mt-[240px] ml-[40px]">
                                shinam salon xavfsiz sayohat
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="rounded-xl w-full h-[420px] object-center"
                            src="https://s3-alpha-sig.figma.com/img/5249/9827/3fdc3b794c7e32163c3e96fedb478114?Expires=1697414400&Signature=QGvVDdwThhYyRyBCxn8ukAbDYfYBvnKID6F74eog8idKtGPoWNlvDVRZMhrhmiUv2M-Y5xpIRFGTmNsiNxMYStZwDFoo2nnXS75eCcb0mk-hYlpJoejQu3yJfQl0l6~Krma8MFG~MXn5kLL~CMqQPWk40mYCWxxzgCLfjAYXt05eZBTaLWyLBJVF73q82U--Jjt6pYqpK~Vpl5Tb81tiZRVWfhXz3syxABpAtp8uP~~A-z70FYagFxj97k5dZ32EbOKfmnbBJcRfM-GpIsPWd4nZPnniKogftdTD9zv3RuRkTLJ0bAWo3av644bTlg4IOeTvwg2ChyD9M-a~Ma~Jew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                        />
                    </div>
                    <div className="relative w-full h-[120px] flex items-center justify-between rounded-xl bg-[#e6e6e6] pl-10 pr-7">
                        <img
                            className="absolute w-[742px] h-[389px] left-[520px] bottom-[16px]"
                            src="https://s3-alpha-sig.figma.com/img/f9d5/96ec/cbdc2a19cbd6386a412967149444c890?Expires=1697414400&Signature=PObx3hnFrlRZPgu3EakFR7Wpz5saiSwd7eF4lEVtuuZMJlildwz-EpKLWauML9ZKruFXNlUc37b7UPyi2YODkc7SKxiVwn2Q43L2pcjx2Y4ehjxA8xpaxNzX~izBd5b9uaZx3LcFpXuH3HdDvlCyEOlKyiZttTsaUrQCKAxE6DztYDtH1tRVo~R9Q446MtlTyiI-1JmYVE6Ysu3wmCN2ru5KMP7hs2uJyoGNuh8DG3NyrH7e0XjnLfysy2PYe4hlvck0Zcq4rs1Y9eE7dkZwDb59TVTEkItawMh~tMewLdiNKU9xGZh3PxFPpV-r~~aL3T5iZXtXDXZlpX35TWRSTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                        />
                        <AUJetour />
                        <button>
                            <svg
                                width="42"
                                height="41"
                                viewBox="0 0 42 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.38478 39.1543L39.1543 2.38475M39.1543 2.38475H2.38478M39.1543 2.38475V39.1543"
                                    stroke="#1A1A1A"
                                    stroke-width="4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
