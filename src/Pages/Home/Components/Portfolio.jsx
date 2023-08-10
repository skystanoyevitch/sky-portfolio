import { allProjects } from "../../Portfolio/allProjects";
import { useInView } from "react-intersection-observer";

const aboutSectionVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      variants={aboutSectionVariant}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      id="#portfolio"
      className="container mx-auto px-8 py-32 lg:py-0 lg:h-screen lg: flex flex-col lg:flex-col lg:place-content-center"
    >
      <div className="mb-6 lg:mb-16 text-center container mx-auto max-w-lg">
        <h1 className="text-2xl lg:text-4xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
          Projects
        </h1>
        <p className="text-md md:text-xl font-light pt-3 lg:text-2xl tracking-wide text-[#9CCDE9]">
          Below you'll find a list of personal projects (non-tutorial based) and
          work that i am proud of building.
        </p>
      </div>

      <div className="md:container mx-auto lg:max-w-4xl md:space-y-0 flex flex-col space-y-16 md:flex md:flex-row md:space-x-6 lg:space-x-16">
        {allProjects.map((project, key) => {
          return (
            <ul
              key={key.id}
              className="container mx-auto px-8 lg:px-0 space-y-10"
            >
              <li className="h-40 w-60 md:w-full md:h-52 lg:h-80">
                <div className="h-full w-full p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
                  <div className="h-full w-full relative">
                    <div
                      className={`${project.thumbnail} absolute h-full w-full md:my-0 right-4 bottom-4 md:right-6 md:bottom-6 lg:right-3 lg:bottom-2`}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
