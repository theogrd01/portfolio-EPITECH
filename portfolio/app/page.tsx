import Image from "next/image";

export default function Home() {

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <div className="stars"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}

      <main className="relative z-10 flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      </main>
      <div className="typewriter">
        <h1>Bonjour, je m'appelle Théo Garde </h1>
      </div>
    </div>
    

  );

}