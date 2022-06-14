import { Plus } from "phosphor-react";
import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { ImovelCard } from "../../components/ImovelCard";
import { Input } from "../../components/Input";

export function InitialPage() {
  return(
    <>
      <Header />

      <main className="p-5">
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold text-2xl">Imóveis que estou acompanhando</h1>
          <Button 
            icon={<Plus size={24} weight={'bold'}/>} 
            className='flex items-center bg-buttonDefault-100 w-36 p-5 rounded-full font-bold text-white shadow-md'
            classNameChildren="ml-2"
          >
            Adicionar
          </Button>
        </div>

        <Filter />
 
      
      </main>
    </>
  );
}