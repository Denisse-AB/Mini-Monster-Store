import { Fragment, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../../context/cart-context";

const Navigation = () => {
  const { itemsCount } = useContext(CartContext);

  return (
    <Fragment>
    <div className="flex items-center justify-center mt-5">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <NavLink type="button" to="/" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" clipRule="evenodd"></path></svg>
          Home
        </NavLink>
        <NavLink type="button" to="subtotal" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <span className="py-0 mr-2">{ itemsCount }</span>
          <svg aria-hidden="true" className="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" clipRule="evenodd"></path></svg>
        </NavLink>
      </div>
    </div>
  <Outlet />
  </Fragment>
  )
}

export default Navigation;