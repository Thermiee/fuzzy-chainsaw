import { useQuery } from "@tanstack/react-query";
import { matchService } from "@/services/matchService";

export const useMatches = () => {
  return useQuery({
    queryKey: ['matches'],
    queryFn: matchService.fetchMatches,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useCompetitionMatches = (competitionName: string) => {
  const { data, ...rest } = useMatches();
  
  const competitionMatches = data?.response.filter(
    match => match.competition === competitionName
  );

  return {
    ...rest,
    data: competitionMatches,
  };
};

export const useCompetitions = () => {
  const { data, ...rest } = useMatches();

  const competitions = data?.response.reduce((acc, match) => {
    const existing = acc.find(c => c.name === match.competition);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ 
        name: match.competition, 
        count: 1,
        thumbnail: match.thumbnail 
      });
    }
    return acc;
  }, [] as Array<{ name: string; count: number; thumbnail: string }>);

  return {
    ...rest,
    data: competitions,
  };
};
