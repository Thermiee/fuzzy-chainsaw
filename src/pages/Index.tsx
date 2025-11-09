import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MatchCard from "@/components/MatchCard";
import { useMatches } from "@/hooks/useMatches";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { data, isLoading, error } = useMatches();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Latest Highlights</h2>
          <p className="text-muted-foreground">Catch up on the most recent matches</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive">Failed to load matches. Please try again later.</p>
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.response.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
