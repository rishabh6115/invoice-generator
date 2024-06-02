import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signOut } from "../store/slices/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const isSignedIn = useAppSelector((state) => state.user.isSignedIn);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  return (
    <nav className="bg-gray-800 px-4 py-2">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-white font-semibold text-sm lg:text-xl">
              Invoice Generator
            </span>
          </div>
          {!isSignedIn ? (
            <div className="flex">
              <button
                onClick={() => {
                  nav("/login");
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-5 rounded-md "
              >
                LOGIN
              </button>
              <button
                onClick={() => {
                  nav("/signup");
                }}
                className="bg-green-500 hover:bg-green-600 text-white py-1.5 px-5 rounded-md ml-4"
              >
                SIGN UP
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-5 rounded-md "
                onClick={() => nav("/")}
              >
                HOME
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-5 rounded-md "
                onClick={() => nav("/invoices")}
              >
                INVOICES
              </button>
              <button
                onClick={() => {
                  dispatch(signOut());
                  toast.success("Logged out successfully");
                }}
                className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-5 rounded-md "
              >
                LOG OUT
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
