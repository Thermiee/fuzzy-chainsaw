import heroImage from "@/assets/hero-stadium.jpg";

const Hero = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Football stadium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-foreground via-pitch-green-light to-highlight-yellow bg-clip-text text-transparent">
          Football Highlights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Watch the best moments from every match. Never miss a goal, save, or stunning play.
        </p>
      </div>
    </div>
  );
};

export default Hero;
