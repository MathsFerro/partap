import { House, UserCircle } from 'phosphor-react';

export function Header() {
  return (
    <>
      <header className='flex justify-between bg-header-100 w-full h-19 p-6'>
        <div className='flex items-center'>
          <House size={40} color={'#FFFFFF'}/>
          <h1 className='text-white text-2xl font-bold ml-2'>PartAp</h1>
        </div>
        <UserCircle size={40} color={'#FFFFFF'} />
      </header>
    </>
  );
}