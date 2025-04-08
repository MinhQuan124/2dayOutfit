import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import NavigationMenu from "./components/NavigationMenu";
import ActionMenu from "./components/MenuAction";

function Header() {
  return (
    <div className="w-full max-w-screen-2xl sticky top-0 z-40 flex-none mx-auto">
      <div className="bg-black px-2">
        <TopBar />
      </div>
      <header>
        <div className="header-nav h-14 w-full mx-auto bg-white px-3 ct-lg:px-8">
          <nav className="main-nav max-w-screen-2xl mx-auto flex flex-row justify-between items-center h-full">
            <Logo />

            <NavigationMenu />

            <ActionMenu />
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
