/* eslint-disable react/prop-types */
const PhotoGalleryCard = ({image, title, viewCount}) => {
    return <div className="photoGalleryCard">
        <div className="thumbnail">
            <img src={image} alt={title} />
            <div className="views">
                <i className="fa-solid fa-camera"></i>
                <span className="viewsCount">{viewCount}</span>
            </div>
        </div>
        <h2>{title}</h2>
        <div className="divider"></div>
    </div>
};

export default PhotoGalleryCard;