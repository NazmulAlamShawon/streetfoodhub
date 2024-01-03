
import myImage from "../../../public/pngtree-yellow-gourmet-shading-cartoon-chef-restaurant-recruitment-background-material-image_133951.jpg";

const Hero_section = () => {
  return (
    <div className="bg-primary flex justify-center items-center text-white border-orange-100 border-spacing-1 ">
      <div className="flex gap-4 m-5 p-4 flex-col ">
        <img src={myImage} alt="Description" />
        <p className="text-center font-light ">Quick Order and Quick Service</p>
        <button className="outline outline-red-700 animate-pulse  m-3 p-3">
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Hero_section;
