import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { Carousel } from "antd";
const GoogleReview = () => {
  const ratingArray = [1, 1, 1, 1, 1];
  const returnClass = (index: number, starRating: number) => {
    if (index + 1 <= starRating) {
      return "w-4 h-4 text-yellow-300 ms-1";
    } else {
      return "w-4 h-4 text-gray-300 ms-1";
    }
  };
  return (
    <div className="reviews-container">
      <ReactGoogleReviews
        layout="custom"
        featurableId={"b8bf51c5-ee4b-46c6-a70a-5f3874cd524b"}
        renderer={(reviews) => {
          return (
            <Carousel autoplay arrows>
              {reviews.map(({ reviewer, comment, starRating }) => (
                <div className="shadowClass	flex pt-2 bg-[#E8B5BC] max-w-auto max-h-[340px] min-h-[220px] md:min-h-[340px] overflow-hidden ">
                  <div className="flex items-top w-full ">
                    <div className="space-y-3">
                      <div className="flex flex-row justify-start  items-center ml-10">
                        <img
                          className=" sm:w-12 h-12  rounded-full   mr-4 mt-2 "
                          src={reviewer.profilePhotoUrl}
                          alt="Profile Picture"
                        />
                        <h3 className="text-lg   underline decoration-[#E8B5BC] font-bold text-[#800980] ">
                          {reviewer.displayName}
                        </h3>
                      </div>

                      <p className="text-[16px] font-medium mx-6 px-4 text-[#800980] items-center justify-center w-fit  items-center underline decoration-[#E8B5BC] text-black  md:text-base">
                        {comment}
                      </p>
                      <div className="flex flex-row justify-center items-center m-2 ">
                        {ratingArray.map((_i, index) => (
                          <svg
                            className={returnClass(index, starRating)}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          );
        }}
      />
    </div>
  );
};

export default GoogleReview;
