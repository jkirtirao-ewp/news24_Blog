import mainThumbnail from "../assets/main-thumbnail.avif";
import NewsTitleWithDivider from "./NewsTitleWithDivider";

const BusinessNewsSection = () => {

    const demoData = [
        "LIVE Updates | CSG vs ITT, TNPL 2023 5th Match: Check LIVE Streaming Details",
        "World Cup: Pakistan Refusal To Play In Ahmedabad Causes Delay In Schedule",
        "Virat Kohli's Cryptic Post Has Everyone Talking",
        "R Ashwin To Nathan Lyon: Top Wicket-takers From Every Nation In WTC Cycle",
        "CSG Vs ITT TNPL 2023 Match No 5 Live Streaming: When And Where To Watch",
        "Former England Captain Surprised At Moeen Ali’s Inclusion In Ashes"
    ];

    return <section className="businessNewsSection">
        <div className="titleContainer">
            <h1>Business News</h1>
            <div className="divider"></div>
        </div>
        <div className="contentContainer">
            <div className="left">
                <div className="thumbnail">
                    <img src={mainThumbnail} alt="thumbnail" />
                </div>
            </div>
            <div className="right">
                {
                    demoData.map((title, index) => {
                        return (
                            <NewsTitleWithDivider
                                key={index}
                                title={title}
                            />
                        );
                    })
                }
            </div>
        </div>
    </section>;
};

export default BusinessNewsSection;