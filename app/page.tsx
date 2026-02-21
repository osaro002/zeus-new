"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { ExternalLink, Wand2, Sparkles, Hammer, Video, Discord } from "lucide-react";

// Projects - replace images here
const projects = [
  { title: "Hytale Character - Warrior", description: "Front view of character", image: "/projects/project1.webp" },
  { title: "Minecraft Creature", description: "Side view", image: "/projects/project2.webp" },
  { title: "Fantasy NPC", description: "Back view", image: "/projects/project3.webp" },
  { title: "Animated Mob", description: "Animated model", image: "/projects/project4.webp" },
  { title: "Stylized Villain", description: "Unique stylized design", image: "/projects/project5.webp" },
  { title: "Custom Weapon Pack", description: "Optimized weapon models", image: "/projects/project6.webp" },
];

// Videos - add up to 10
const videos = [
  { title: "Character Animation 1", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 2", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 3", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 4", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 5", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 6", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 7", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 8", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 9", youtubeId: "dQw4w9WgXcQ" },
  { title: "Character Animation 10", youtubeId: "dQw4w9WgXcQ" },
];

export default function Home() {
  const [index, setIndex] = useState(-1); // gallery state

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold tracking-wide">Zeus Studio</h1>

          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#videos">Videos</a>
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>

          <a href="https://discord.gg/reDExuwD" target="_blank" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
            Join Discord
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs text-zinc-300">
            <Sparkles size={14} /> Game-ready assets • Clean animations • Fast delivery
          </p>

          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Captivating Models <br /> and Animations.
          </h2>

          <p className="max-w-2xl text-lg text-zinc-300">
            Zeus Studio creates stylized characters, creatures, and animations for games. Optimized assets with smooth motion — perfect for Hytale/Minecraft style projects.
          </p>
        </motion.div>
      </section>

      {/* Work / Gallery */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold">Featured Work</h3>
          <p className="mt-2 text-zinc-400">Click an image to see the gallery.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 cursor-pointer" onClick={() => setIndex(i)}>
                <div className="h-52 w-full bg-zinc-800">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Lightbox slides={projects.map(p => ({ src: p.image }))} open={index >= 0} index={index} close={() => setIndex(-1)} plugins={[Thumbnails]} />
        </motion.div>
      </section>

      {/* Videos */}
      <section id="videos" className="mx-auto max-w-6xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold">Video Showcase</h3>
          <p className="mt-2 text-zinc-400">Click to watch videos.</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {videos.map((video, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
                  <Video size={18} className="text-zinc-400" />
                  <h4 className="font-semibold">{video.title}</h4>
                </div>
                <div className="aspect-video w-full">
                  <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Zeus Studio. All rights reserved.
      </footer>
    </div>
  );
}
