export const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900  dark:text-white duration-200">
      <div className="  bg-primary ">
        <div className="flex justify-between items-center">
          <div className="">logo</div>
          <div>
            <ul className=" flex gap-4">
              <li>
                <a href="#" className="inline-block py-4 px-4">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-4 px-4">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-4 px-4">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-4 px-4">
                  Order
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-4 px-4">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
