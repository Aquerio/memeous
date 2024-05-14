import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className='text-3xl'>{error.status}</p>
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
};

export default Errorpage;
