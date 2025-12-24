import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold">DEVSGUARD</h1>

        <p className="text-lg">
          DEVSGUARD is a platform for developers to find and hire developers.
        </p>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file. start again from scratch.
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Register
          </button>
        </div>
      </main>
    </div>
  );
}
