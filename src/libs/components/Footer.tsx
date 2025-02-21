export default function Footer() {
  const year = new Date().getUTCFullYear();
  const toNow = year === 2025 ? '' : `-${year}`;
  return (
    <div className="mb-6 p-0 w-full text-center">
      <p className="m-0 p-0 font-bold text-gray-500 text-base/snug">
        Copyright © 2025{toNow} React Async for Client
        <br />
        Built by{' '}
        <a href="https://github.com/HK-SHAO" target="_blank" rel="noreferrer">
          @HK-SHAO
        </a>{' '}
        with <span className="inline-block doki-doki">❤️</span> and MIT License
      </p>
    </div>
  );
}
