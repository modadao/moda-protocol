import { create } from 'zustand';

import { Track } from '../types';

interface Store {
  playlist: Track[];
  setPlaylist: (playlist: Track[]) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (index: number) => void;
  currentTime: number;
  currentDuration: number;
  setCurrentTime: (time: number) => void;
  setCurrentDuration: (duration: number) => void;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  getHasNextTrack: () => boolean;
  getHasPrevTrack: () => boolean;
}

export const usePlaylistPlayerStore = create<Store>((set, get) => ({
  playlist: [],
  setPlaylist: (playlist) => set({ playlist: playlist }),
  currentTrackIndex: -1,
  setCurrentTrackIndex: (index) => set({ currentTrackIndex: index }),
  currentTime: 0,
  currentDuration: 0,
  setCurrentTime: (time) => set({ currentTime: time }),
  setCurrentDuration: (duration) => set({ currentDuration: duration }),
  isPlaying: false,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  next: () =>
    set((state) => ({
      currentTrackIndex: (state.currentTrackIndex + 1) % state.playlist.length,
    })),
  previous: () =>
    set((state) => ({
      currentTrackIndex:
        state.currentTrackIndex === 0
          ? state.playlist.length - 1
          : state.currentTrackIndex - 1,
    })),
  getHasNextTrack: () =>
    get().currentTrackIndex < get().playlist.length - 1 &&
    get().playlist.length > 0,
  getHasPrevTrack: () =>
    get().currentTrackIndex > 0 && get().playlist.length > 0,
}));
