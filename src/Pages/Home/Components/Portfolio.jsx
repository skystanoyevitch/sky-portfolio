import { allProjects } from "../../Portfolio/allProjects";

function Portfolio() {
  return (
    <div className="mt-40">
      <h1 className="mb-6 text-2xl text-center lg:text-4xl font-poppins lg:mb-16 font-bold text-gray-700">
        <span className="underline underline-offset-4 decoration-orange-500 decoration-4">
          Featured
        </span>{" "}
        {""}
        Work
      </h1>
      <div className="lg:flex lg:justify-evenly lg::space-x-8">
        {allProjects.map((project, key) => {
          return (
            <ul key={key.id} className="container mx-auto px-8 lg:px-0">
              <li className="">
                <div
                  className={`${project.thumbnail} h-60 md:h-[30rem] container mx-auto md:w-3/4 my-10 rounded-xl`}
                ></div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
