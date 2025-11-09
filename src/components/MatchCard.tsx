import { Link } from "react-router-dom";
import { Match } from "@/types/match";
import { Calendar, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const matchDate = new Date(match.date);
  
  return (
    <Link to={`/match/${encodeURIComponent(match.title)}`} state={{ match }}>
      <Card className="group overflow-hidden bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={match.thumbnail} 
            alt={match.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="flex items-center gap-1.5">
              <Play className="h-3.5 w-3.5 text-primary-foreground" />
              <span className="text-xs font-semibold text-primary-foreground">
                {match.videos.length} {match.videos.length === 1 ? 'Video' : 'Videos'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {match.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
            {match.competition}
          </p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{format(matchDate, "MMM d, yyyy • HH:mm")}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MatchCard;
