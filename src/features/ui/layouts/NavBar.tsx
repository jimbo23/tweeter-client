import TweeterLogo from "@kiefer-tweeter/assets/tweeter.svg";
export const NavBar = () => (
  <nav className="flex sticky top-0 justify-between items-center h-16 bg-white w-full px-18">
    <img src={TweeterLogo} alt="logo" />
    <div className="flex space-x-20">
      <a>Home</a>
      <a>Explore</a>
      <a>Bookmarks</a>
    </div>
    <div className="flex space-x-2 items-center">
      <img
        alt="profile"
        height={40}
        width={40}
        src="https://avatars.githubusercontent.com/u/77193140?v=4"
      />
      <p>kiefer</p>
    </div>
  </nav>
);
