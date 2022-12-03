import TweeterLogo from "@kiefer-tweeter/assets/tweeter.svg";
export const NavBar = () => (
  <nav className="flex sticky top-0 justify-between items-center h-16 bg-white w-full px-18">
    <img src={TweeterLogo} alt="logo" />
    <div className="flex space-x-20">
      <a>Home</a>
      <a>Explore</a>
      <a>Bookmarks</a>
    </div>
    <p>kiefer</p>
  </nav>
);
