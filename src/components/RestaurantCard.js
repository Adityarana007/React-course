import RatingComponentSvg from "../common/RatingComponentSvg";
import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log('props_restrauntcard', props)
    const { cloudinaryImageId, aggregatedDiscountInfoV3, name, avgRatingString,sla, costForTwo, cuisines } = props.resData;
    return (
      <div
        className="w-72 px-5 py-5 mx-5 rounded-md mb-6 h-auto shadow-md bg-gray-100 hover:scale-105 hover:transform translate-x-10"
        style={{
          // backgroundColor: "#f0f0f0",
          position: "relative",
        }}
      >
         <div className="absolute bottom-30 left-5 right-5  h-8 bg-gradient-to-t from-transparent to-black/100 rounded-t-md"></div>
        <img
          alt="img-logo"
          className="h-56 w-64  shadow-[0px_4px_8px_rgba(0,0,0,0.2)]"
          src={IMG_BASE_URL + cloudinaryImageId}
        />
       
          {
              (aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader) && (
                  <h2 className="absolute top-5 text-white text-l font-bold px-6" >
                  {aggregatedDiscountInfoV3?.header +
                    aggregatedDiscountInfoV3?.subHeader}
                </h2>
              )
          }
         
  
        <h3 className="font-bold font-serif py-2 text-xl">{name}</h3>
        <div className="rating-container">
          <RatingComponentSvg/>
          <span className="font-serif">
            {avgRatingString} | {sla?.slaString}
          </span>
        </div>
        <h3 className="font-thin text-gray-800 font-serif py-2">{cuisines.join(", ")}</h3>
        <p className="font-bold font-serif">{costForTwo}</p>
      </div>
    );
  };

  export default RestaurantCard;