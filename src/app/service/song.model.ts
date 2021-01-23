export interface Playlist {
    name: string;
    totalDuration: number;
    totalSongs: number;
    description: string;
    songs: Song[];
  }
  
  export interface Song {
    title: string;
    artist: string;
    duration: number;
  }