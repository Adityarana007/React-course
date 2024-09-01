import RatingComponentSvg from "../common/RatingComponentSvg";
import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId, aggregatedDiscountInfoV3, name, avgRatingString,sla, costForTwo, cuisines } = props.resData;
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
          position: "relative",
        }}
      >
        <img
          alt="img-logo"
          className="card-img"
          src={IMG_BASE_URL + cloudinaryImageId}
        />
          {
              (aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader) && (
                  <h2 className="discount-text">
                  {aggregatedDiscountInfoV3?.header +
                    aggregatedDiscountInfoV3?.subHeader}
                </h2>
              )
          }
         
  
        <h3 className="res-name">{name}</h3>
        <div className="rating-container">
          <RatingComponentSvg/>
          <span className="rating-text">
            {avgRatingString} | {sla?.slaString}
          </span>
        </div>
        <h3 className="card-description">{cuisines.join(", ")}</h3>
        <p className="cost">{costForTwo}</p>
      </div>
    );
  };

  export default RestaurantCard;