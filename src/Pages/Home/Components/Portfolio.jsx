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
      className="container mx-auto px-8 py-32 lg:py-0 lg:h-screen lg: flex flex-col lg:flex-col lg:place-content-center"
    >
      <div className="mb-6 lg:mb-16 text-center container mx-auto max-w-lg">
        <h1 className="text-2xl lg:text-4xl font-poppins font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
          Projects i've worked on
        </h1>
      </div>

      <div className="container mx-auto lg:max-w-4xl md:space-y-0 flex flex-col space-y-16 md:flex md:flex-row md:space-x-6 lg:space-x-16">
        {allProjects.map((project, key) => {
          return (
            <ul
              key={key.id}
              className="container mx-auto px-8 lg:px-0 space-y-10"
            >
              <li className="h-40 w-60 md:w-full md:h-52 lg:h-80">
                <div className="h-full w-full p-[0.8px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#e75d48]">
                  <div className="h-full w-full relative bg-[#1A1D25]">
                    <div
                      className={`${project.thumbnail} absolute h-full w-full md:my-0 right-2 bottom-2 md:right-4 md:bottom-4 lg:right-6 lg:bottom-6`}
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
