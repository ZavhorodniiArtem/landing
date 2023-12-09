import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo md:absolute mb-10 md:mb-0 md:bottom-[50px] flex justify-center items-center md:left-[70px] z-50">
      <img src={logo} alt="Logo" className="w-[214px] h-[60px]" />
    </div>
  );
};

export default Logo;