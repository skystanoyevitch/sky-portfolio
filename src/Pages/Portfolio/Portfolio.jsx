import React, { useState } from "react";

function Portfolio() {
  const [buttonOpen, setButtonOpen] = useState(false);
  console.log(buttonOpen);
  return (
    <>
      <div className="h-screen text-white flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="">
            <div className="border">
              <button
                type="button"
                className={`border h-20 ${
                  buttonOpen ? "h-60" : "h-20"
                } w-full transition-all`}
                onClick={() => setButtonOpen(!buttonOpen)}
              >
                Col 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
