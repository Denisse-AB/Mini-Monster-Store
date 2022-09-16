import { Fragment, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../context/cart-context/cart-context";

const Navigation = () => {
  const { itemsCount } = useContext(CartContext);

  return (
    <Fragment>
      <div className="flex items-center justify-center mt-5">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <NavLink type="button" to="/" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-card-bg focus:z-10 focus:ring-2 focus:ring-card-bg focus:text-card-bg">
            <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" clipRule="evenodd"></path></svg>
            Home
          </NavLink>
          <a type="button" href="https://github.com/Denisse-AB/Mini-Monster-Store" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-card-bg focus:z-10 focus:ring-2 focus:ring-card-bg focus:text-card-bg">
            <svg aria-hidden="true" className="mr-2 w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" clipRule="evenodd"></path></svg>
            Github
          </a>
          <NavLink type="button" to="subtotal" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-card-bg focus:z-10 focus:ring-2 focus:ring-card-bg focus:text-card-bg">
            <span data-testid="test-cart-count" className="py-0 mr-2">{ itemsCount }</span>
            <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" clipRule="evenodd"></path></svg>
          </NavLink>
        </div>
      </div>
    <Outlet />
    </Fragment>
  )
}

export default Navigation;