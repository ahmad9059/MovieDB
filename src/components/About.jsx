import image from "../../public/look-img.png";
const About = () => {
  return (
    <div className="w-full relative h-full">
      <div className="w-full h-[25vh] bg-secondary flex items-center justify-center ">
        <h1 className="text-6xl text-white font-bold ">About Us</h1>
      </div>
      <div className="absolute top-[18%] left-[30%] rounded-xl overflow-hidden ">
        <img className="h-[40vh]" src={image} alt="" />
      </div>
      <div>
        <div className="text-white absolute left-[28%] mt-10 top-[60%] w-1/2 text-2xl ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            itaque voluptatem recusandae facere accusamus mollitia iste
            perferendis! Sint in, nulla eaque quo tempore, nihil velit porro
            fugit beatae, voluptas eligendi accusamus quidem consectetur? Rerum
            aut beatae saepe ad id accusantium illum, voluptas recusandae sunt
            reiciendis quibusdam molestias! Quaerat, iste sint! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cum sunt natus illum
            veritatis in. Inventore accusamus voluptas esse mollitia
            perspiciatis!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
