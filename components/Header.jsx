import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white sticky top-0 z-50 bg-primary/80 backdrop-blur'>
      <div className='container mx auto flex justify-between items-center'>
        {/*Logo  */}
        <a href='#home'>
          <h1 className='text-4xl font-semibold'>
            Vivek<span className='text-accent'>.</span>
          </h1>
        </a>
        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <a href="#contact">
            <Button>Hire me</Button>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
