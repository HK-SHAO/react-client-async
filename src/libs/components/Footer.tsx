export default function Footer() {
  const year = new Date().getUTCFullYear();
  const toNow = year === 2025 ? '' : `-${year}`;
  return (
    <div className="-mt-4 mb-10 p-0 w-full text-center">
      <p className="m-0 p-0 font-bold text-base/snug text-gray-500">
        © 2025{toNow} React Async for Client | built by{' '}
        <a href="https://github.com/HK-SHAO" target="_blank" rel="noreferrer">
          @HK-SHAO
        </a>
      </p>
    </div>
  );
}
