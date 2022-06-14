import { Button } from "../Button";
import './style.css';

export function Filter() {
  return (
    <>
      <div className="flex">
        <Button className='button-filter rounded-l-lg'>
          Alugar
        </Button>
        <Button className='button-filter border-2 border-x-gray-400 border-y-transparent'>
          Comprar
        </Button>
        <Button className='button-filter rounded-r-lg'>
          Todos
        </Button>

        
      </div>
    </>
  );
}