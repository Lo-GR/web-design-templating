export const Footer = () => {
  return (
    <div className="bg-sp-primary-400">
      <div className="container flex flex-col justify-center items-center text-2xl gap-1 mx-auto p-4">
        <div className="container flex flex-row justify-around p-2">
          <div>
            <p>Contact Us</p>
            <p>Support</p>
          </div>
          <div>
            <p>Careers</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Accessibility</p>
            <p>Privacy Agreement</p>
          </div>
          <div className="additionalLinks">
            <a href="https://github.com/Lo-GR" target="_blank" rel="noreferrer"><p>Facebook</p> </a>
            <a href="https://linkedin.com/in/lo-gr" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
            <a href="https://leetcode.com/Lo-GR/" target="_blank" rel="noreferrer"><p>TikTok</p></a>
          </div>
        </div>
        <div className="w-9/12 h-px bg-gradient-to-tl from-sp-secondary-300 to-sp-tertiary-500" />
        <div>
          <p>©2023 Alex + Logan. License <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT</a></p>
        </div>
      </div>
    </div>
  );
};
