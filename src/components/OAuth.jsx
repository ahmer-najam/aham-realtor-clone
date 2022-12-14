import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      className="flex items-center justify-center w-full 
    bg-red-400 hover:bg-red-600 text-white px-7 py-2 
    uppercase text-sm font-medium rounded shadow-md hover:shadow-lg
    transition duration-150 ease-in-out"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> CONTINUE WITH
      GOOGLE
    </button>
  );
}
