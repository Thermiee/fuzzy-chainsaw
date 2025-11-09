import { ApiResponse } from "@/types/match";

const API_BASE_URL = 'https://www.scorebat.com/video-api/v3/feed';
const API_TOKEN = 'MTc1NzhfMTczNDc5NDI0OV82MGNiZGM1OGVmODZjMjljZjg3NDRiMDNkNzk1MmZhNjdmNDdhZDRj';

export const matchService = {
  async fetchMatches(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/?token=${API_TOKEN}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch matches');
    }
    
    return response.json();
  }
};
