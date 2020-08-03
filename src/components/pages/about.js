import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis sed ex sit amet venenatis. Morbi ultrices eget magna in congue. Nullam cursus urna ut dui facilisis, ac auctor ligula pulvinar. Maecenas congue aliquet consectetur. Vestibulum eu lacus nibh. Cras erat augue, vestibulum feugiat ullamcorper lobortis, hendrerit sed risus. Cras vulputate felis non orci bibendum suscipit. Nunc porttitor, urna quis sollicitudin aliquam, ex leo vestibulum leo, eu aliquam mauris dui eget dui. Mauris at ante et mauris tempor maximus nec quis velit. Aliquam efficitur, eros ut suscipit ornare, justo enim efficitur dolor, imperdiet ultricies enim erat in turpis. Suspendisse facilisis lacinia leo ac iaculis. Proin convallis ultricies neque, id euismod nunc dictum a.
      </div>
    </div>
  );
}
