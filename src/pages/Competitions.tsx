import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useCompetitions } from "@/hooks/useMatches";
import { Loader2, Trophy, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Competitions = () => {
  const { data: competitions, isLoading, error } = useCompetitions();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Competitions</h1>
          <p className="text-muted-foreground">Browse matches by competition</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive">Failed to load competitions. Please try again later.</p>
          </div>
        )}

        {competitions && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition, index) => (
              <Link 
                key={index} 
                to={`/competition/${encodeURIComponent(competition.name)}`}
              >
                <Card className="group overflow-hidden bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={competition.thumbnail} 
                      alt={competition.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {competition.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {competition.count} {competition.count === 1 ? 'match' : 'matches'}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Competitions;
