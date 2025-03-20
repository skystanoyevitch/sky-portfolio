/**
 * Adds interactive 3D effect to project items
 * Creates a subtle tilt effect based on mouse position
 */
export const initProject3DEffects = () => {
  // Wait for DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-3d-hover");

    projectItems.forEach((item) => {
      // Add mousemove event to each project item
      item.addEventListener("mousemove", (e) => {
        // Get position of the cursor relative to the element
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element

        // Calculate rotation based on mouse position
        // Limit to very small values for subtlety
        const rotateY = (x / rect.width - 0.5) * 3; // max ±1.5 degrees
        const rotateX = (y / rect.height - 0.5) * -3; // max ±1.5 degrees

        // Apply the transform
        item.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.01, 1.01, 1.01)
            translateY(-2px)
          `;

        // Add a subtle "light source" effect based on mouse position
        const lightX = (x / rect.width) * 100;
        const lightY = (y / rect.height) * 100;
        item.style.backgroundImage = `
            radial-gradient(
              circle at ${lightX}% ${lightY}%,
              rgba(0, 255, 0, 0.05) 0%,
              rgba(0, 0, 0, 0) 50%
            )
          `;
      });

      // Reset transform on mouseout
      item.addEventListener("mouseleave", () => {
        item.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateY(0)";
        item.style.backgroundImage = "none";
      });
    });
  });
};

export default initProject3DEffects;
