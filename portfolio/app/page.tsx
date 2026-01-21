import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <div className="stars"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}

 <div>
    <Image
      src="/theo.png"
      className="img rounded-full"
      width={400}
      height={400}
      alt="Picture of the author"
      priority
    />
    <br/>
    <br/>
  </div>

      
      <div className="typewriter">
        <h1>Bonjour, je m'appelle Théo Garde </h1>
      </div>
      <div className="slide-right">
        <h2>et je suis actuellement en première année bachelor à Epitech </h2>
      </div>
     
     <br/>
     <div className="btn">
       <a 
          href="https://instagram.com/theo_.grd_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-btn"
        >
          <i className="bi bi-instagram text-xl"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/theo-garde-65797a3a0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <i className="bi bi-linkedin text-xl"></i>
        </a>

         <a 
          href="https://github.com/theogrd01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-btn"
        >
          <i className="bi bi-github text-xl"></i>
        </a>

         <a 
          href="https://x.com/GardeTheo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="x-btn"
        >
          <i className="bi bi-twitter-x text-xl"></i>
        </a>

        
        
        </div>
    </div>
    
    

    


  );

}