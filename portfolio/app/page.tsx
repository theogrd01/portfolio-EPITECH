import Image from "next/image";

export default function Home() {

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <div className="stars"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}
 <div>
    <Image
      src="/pp.png"
      className="img rounded-full"
      width={400}
      height={400}
      alt="Picture of the author"
      priority
    />
  </div>

      
      <div className="typewriter">
        <h1>Bonjour, je m'appelle Théo Garde </h1>
      </div>
      <div className="slide-right">
        <h2>et je suis actuellement en première année bachelor à Epitech </h2>
      </div>
      
    </div>
    


  );

}