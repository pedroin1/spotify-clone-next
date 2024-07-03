"use client";

import {
  AlignJustify,
  Maximize2,
  MicVocal,
  Pause,
  Play,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Speaker,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [pause, setPause] = useState<boolean>(true);
  const [repeat, setRepeat] = useState<boolean>(true);
  const [random, setRandom] = useState<boolean>(false);

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image
          width={50}
          height={50}
          quality={100}
          alt="image"
          className="w-24 h-18"
          src="data:image/jpeg;base64,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"
        />
        <div>
          <div className="flex flex-col">
            <strong className="font-normal">Nome Musica</strong>
            <a href="/" className="text-xs text-zinc-400 hover:underline">
              Album
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex gap-8 items-center">
          <button
            onClick={(e) => setRandom(!random)}
            className={`text-zinc-500 hover:text-green-500 ${
              random ? "text-green-500" : ""
            }`}
          >
            <Shuffle />
          </button>
          <button className="text-zinc-500 hover:text-green-500">
            <SkipBack />
          </button>
          <button
            className="bg-white rounded-full p-2 hover:bg-green-500"
            onClick={(e) => setPause(!pause)}
          >
            {pause ? (
              <Pause color="#111111" fill="#111111" />
            ) : (
              <Play color="#111111" fill="#111111" />
            )}
          </button>
          <button className="text-zinc-500 hover:text-green-500">
            <SkipForward />
          </button>
          <button
            onClick={(e) => setRepeat(!repeat)}
            className="text-zinc-500 hover:text-green-500"
          >
            {repeat ? <Repeat /> : <Repeat1 className="text-green-500" />}
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-[400px] bg-slate-600">
            <div className="h-1 rounded-full w-[100px] bg-slate-700"></div>
          </div>
          <span className="text-xs text-zinc-500">2:44</span>
        </div>
      </div>
      <div className="flex gap-2">
        <a className="hover:text-green-500" href="/">
          <MicVocal size={20} />
        </a>
        <a className="hover:text-green-500" href="/">
          <AlignJustify size={20} />
        </a>
        <a className="hover:text-green-500" href="/">
          <Speaker size={20} />
        </a>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-500">
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-[100px] bg-slate-600">
            <div className="h-1 rounded-full w-[50px] bg-slate-700 flex items-center">
              <div className="ml-auto size-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <a className="hover:text-green-500" href="/">
          <Maximize2 size={20} />
        </a>
      </div>
    </footer>
  );
}
