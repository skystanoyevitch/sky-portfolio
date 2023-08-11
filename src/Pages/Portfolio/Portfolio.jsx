import React, { useState } from "react";

function Portfolio() {
  const [buttonOpen, setButtonOpen] = useState(false);
  console.log(buttonOpen);
  return (
    <>
      <div className="h-screen text-white flex flex-col justify-center">
        <div className="h-1/2 container mx-auto w-80 md:w-full md:max-w-3xl">
          <div className="">
            <button
              type="button"
              className={`border h-20 ${
                buttonOpen ? "h-60" : "h-20"
              } transition-all w-full`}
              onClick={() => setButtonOpen(!buttonOpen)}
            >
              <div className="text-left pl-8">PROJECT ONE</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
