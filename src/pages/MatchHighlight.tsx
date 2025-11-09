import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Match } from "@/types/match";
import { Calendar, Trophy, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

const MatchHighlight = () => {
  const location = useLocation();
  const match = location.state?.match as Match;

  if (!match) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Match not found</p>
          <Link to="/">
            <Button className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const matchDate = new Date(match.date);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Highlights
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border overflow-hidden mb-6">
              {match.videos.map((video, index) => (
                <div key={index} className="relative">
                  <div 
                    dangerouslySetInnerHTML={{ __html: video.embed }}
                    className="w-full"
                  />
                  {video.title && (
                    <div className="p-4 bg-background/50 backdrop-blur-sm">
                      <p className="text-sm font-medium text-foreground">{video.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </Card>

            <Card className="bg-gradient-card border-border p-6">
              <h1 className="text-3xl font-bold text-foreground mb-4">{match.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-sm">{match.competition}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm">{format(matchDate, "MMMM d, yyyy • HH:mm")}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-foreground mb-3">Match Information</h2>
                <p className="text-muted-foreground">
                  Watch the highlights from this exciting {match.competition} match. 
                  This match featured some incredible moments and showcased the best of football.
                </p>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">Match Stats</h3>
              
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Competition</p>
                  <p className="font-medium text-foreground">{match.competition}</p>
                </div>
                
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Match Date</p>
                  <p className="font-medium text-foreground">{format(matchDate, "MMMM d, yyyy")}</p>
                </div>
                
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Kick-off Time</p>
                  <p className="font-medium text-foreground">{format(matchDate, "HH:mm")}</p>
                </div>
                
                <div className="pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Available Videos</p>
                  <p className="font-medium text-foreground">{match.videos.length}</p>
                </div>
              </div>

              <Link to={`/competition/${encodeURIComponent(match.competition)}`}>
                <Button className="w-full mt-4" variant="secondary">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Competition
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatchHighlight;
