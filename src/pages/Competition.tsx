import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MatchCard from "@/components/MatchCard";
import { useCompetitionMatches } from "@/hooks/useMatches";
import { Loader2, Trophy } from "lucide-react";

const Competition = () => {
  const { name } = useParams<{ name: string }>();
  const competitionName = decodeURIComponent(name || '');
  
  const { data: competitionMatches, isLoading, error } = useCompetitionMatches(competitionName);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary p-3 rounded-lg">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">{competitionName}</h1>
              <p className="text-muted-foreground mt-1">
                {competitionMatches?.length || 0} {competitionMatches?.length === 1 ? 'match' : 'matches'} available
              </p>
            </div>
          </div>
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

        {competitionMatches && competitionMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        ) : (
          !isLoading && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No matches found for this competition.</p>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Competition;
