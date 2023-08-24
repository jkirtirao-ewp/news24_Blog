import mainThumbnail from "../assets/main-thumbnail.avif";
import smallThumbnail from "../assets/small-thumbnail.avif";
import PhotoGalleryCard from "./PhotoGalleryCard";

const PhotoGallerySection = () => {
    const demoData = [
        {
            image: smallThumbnail,
            title: "Love Some K-Drama? 5 Must-Try Korean Treats You Can Munch Along At Home",
            viewCount: 23
        },
        {
            image: smallThumbnail,
            title: "Love Some K-Drama? 5 Must-Try Korean Treats You Can Munch Along At Home",
            viewCount: 23
        },
        {
            image: smallThumbnail,
            title: "Love Some K-Drama? 5 Must-Try Korean Treats You Can Munch Along At Home",
            viewCount: 23
        },
        {
            image: smallThumbnail,
            title: "Love Some K-Drama? 5 Must-Try Korean Treats You Can Munch Along At Home",
            viewCount: 23
        },
    ];


    return <section className="photoGallerySection">
        <div className="titleContainer">
            <h1>Photo Gallery</h1>
            <div className="divider"></div>
            <button>MORE</button>
        </div>
        <div className="contentContainer">
            <div className="left">
                <div className="thumbnail">
                    <img src={mainThumbnail} alt="thumbnail" />
                    <div className="views">
                        <i className="fa-solid fa-camera"></i>
                        <span className="viewsCount">6</span>
                    </div>
                </div>
                <div className="info">
                    <h2 className="title">Fact Check: Did Rayudu Post 3D Glasses Tweet To Intentionally Hurt V Shankar</h2>
                </div>
            </div>

            <div className="right">
                {demoData.map((data, index) => {
                    return (
                        <PhotoGalleryCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            viewCount={data.viewCount}
                        />
                    )
                })}
            </div>
        </div>
    </section>;
};

export default PhotoGallerySection;