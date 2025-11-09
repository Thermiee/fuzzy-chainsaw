import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-pitch-green-light bg-clip-text text-transparent">
              FootyHighlights
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/competitions" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Competitions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
