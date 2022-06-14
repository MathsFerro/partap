import { Plus } from "phosphor-react";
import { Button } from "../Button";

export function Filter() {
  return (
    <>
      <div className="flex">
        <Button classNameElement='flex items-center justify-center bg-[#F2F2F2] w-28 p-3 font-bold text-[#757575] rounded-l-lg '>
          Alugar
        </Button>
        <Button classNameElement='flex items-center justify-center bg-[#F2F2F2] w-28 p-3 font-bold text-[#757575] border-2 border-x-gray-400 border-y-transparent'>
          Comprar
        </Button>
        <Button classNameElement='flex items-center justify-center bg-[#F2F2F2] w-28 p-3 font-bold text-[#757575] rounded-r-lg'>
          Todos
        </Button>

        
      </div>
    </>
  );
}