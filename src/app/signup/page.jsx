import SignUp from '@/components/Shared/SignUp/SignUp';

const page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-2">
      <div className='w-96 mx-auto p-4 border rounded-lg shadow'>
        <h1 className='mb-4 text-3xl font-semibold'>Sign Up</h1>
        <SignUp />
      </div>
    </div>
  );
};

export default page;