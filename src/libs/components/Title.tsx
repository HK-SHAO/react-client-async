const title = 'React Async for Client';

export default function Title() {
  return (
    <>
      <span className="box-content absolute flex bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 blur-xl mx-auto py-4 border w-fit font-extrabold text-5xl text-center text-transparent pointer-events-none select-none">
        {title}
      </span>
      <span className="relative top-0 flex justify-center items-center bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 py-4 w-fit h-auto font-extrabold text-5xl text-center text-transparent select-auto">
        <span className="select-text">{title}</span>
      </span>
    </>
  );
}
