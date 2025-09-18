import notfound from "/404.gif";
const NotFound = () => {
  return (
    <div className="w-screen bg-black h-screen flex justify-center items-center ">
      <img className="" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
