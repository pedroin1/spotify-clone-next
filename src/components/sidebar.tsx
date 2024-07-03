"use client";

import { Heart, House, LibraryBig, Plus, Search } from "lucide-react";

export default function SideBar() {
  const playlists = [
    "Daily Mix 1",
    "Release Radar",
    "Discover Weekly",
    "Chill Hits",
    "Top Hits",
    "Workout",
    "RapCaviar",
    "Rock Classics",
    "Pop Rising",
    "Hot Country",
    "Peaceful Piano",
    "Mood Booster",
    "All Out 80s",
    "Jazz Vibes",
    "New Music Friday",
  ];
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-red-500 rounded-full size-3"></div>
        <div className="bg-yellow-500 rounded-full size-3"></div>
        <div className="bg-green-500 rounded-full size-3"></div>
      </div>
      <nav className="space-y-5">
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <House />
          Home
        </a>
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <LibraryBig />
          Library
        </a>
      </nav>
      <nav className="mt-16 space-y-4">
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Plus color="#c1c1c1" className="bg-white rounded-sm" />
          Add Playlist
        </a>
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Heart
            fill="#ffffff"
            className="p-1 bg-gradient-to-r from-purple-700 to-purple-400 rounded-sm"
          />
          Liked Songs
        </a>
      </nav>
      <nav className="mt-6 pt-6 flex flex-col gap-2 overflow-y-auto-auto border-t border-zinc-800">
        {playlists.map((item, index) => (
          <a
            key={index}
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-opacity"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
