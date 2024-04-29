import React from "react";
import profile from "../assets/images/profile.jpg";

function ReviewCard() {
  return (
    <div className="review_card mx-auto mb-4 mb-lg-0">
      <div className="review_profile">
        <img src={profile} alt="profile" />
      </div>
      <h5>John Doe</h5>
      <p className="review_rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </p>
      <p className="review_comment">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
        ante et odio dictum, sit amet mollis nisi maximus."{" "}
      </p>
    </div>
  );
}

export default ReviewCard;
