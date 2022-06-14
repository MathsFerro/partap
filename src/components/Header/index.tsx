import { House, UserCircle } from 'phosphor-react';

export function Header() {
  return (
    <>
      <header className='flex justify-between w-screen h-19 p-6 bg-gradient-to-r from-headerGradient-left to-headerGradient-right'>
        <div className='flex items-center'>
          <House size={40} color={'#FFFFFF'}/>
          <h1 className='text-white text-2xl font-bold ml-2'>PartAp</h1>
        </div>
        <UserCircle size={40} color={'#FFFFFF'} />
      </header>
    </>
  );
}