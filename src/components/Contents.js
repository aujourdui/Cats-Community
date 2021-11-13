import React from "react";

const Contents = () => (
  <div className="contents">
    <div className="content-image">
      <ul className="content-container">
        <li>
          <div>
            <p>User1</p>
            <img src="images/cat1.jpg" alt="cat1" width="700" height="450" />
          </div>
        </li>
        <li>
          <div>
            <p>User2</p>
            <img src="images/cat2.jpg" alt="cat2" width="700" height="450" />
          </div>
        </li>
        <li>
          <div>
            <p>User3</p>
            <img src="images/cat3.jpg" alt="cat3" width="500" height="600" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Contents;
