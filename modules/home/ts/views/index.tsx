import * as React from "react";

export /*bundle*/
function View({ store }): JSX.Element {
  console.log("view ", store.query("de que trata esto?"));

  return (
    <div className="page__container">
      <h1>
        <span className="beyond">AIRooms</span> Home Pagee!
      </h1>
    </div>
  );
}
