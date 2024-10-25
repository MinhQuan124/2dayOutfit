import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import NavigationMenu from "./components/NavigationMenu";
import ActionMenu from "./components/MenuAction";

function Header() {
  return (
    <div className="header-container bg-mainBgColor">
      <TopBar />

      <div className="header-nav h-14 w-full mx-auto bg-white">
        <nav className="main-nav max-w-8xl px-6 mx-auto flex flex-row justify-between items-center h-full">
          <Logo />

          <NavigationMenu />

          <ActionMenu />
        </nav>
      </div>
    </div>
  );
}

export default Header;
