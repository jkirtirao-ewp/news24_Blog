/* eslint-disable react/prop-types */
const NewsTitleWithDivider = ({title}) => {
    return <div className="newsTitleWithDivider">
        <a href="">
            <h2>{title}</h2>
        </a>
        <div className="divider"></div>
    </div>
};

export default NewsTitleWithDivider;