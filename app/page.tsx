"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Hammer,
  Sparkles,
  Wand2,
  Video,
  MessageCircle,
} from "lucide-react";

const projects = [
  {
    title: "Hytale Character - Warrior",
    description: "Stylized game-ready character with clean topology.",
    image: "/projects/project1.webp",
  },
  {
    title: "Minecraft-Style Creature",
    description: "Custom creature model with optimized shapes and shading.",
    image: "/projects/project2.webp",
  },
  {
    title: "Fantasy NPC",
    description: "High-quality character designed for game environments.",
    image: "/projects/project3.webp",
  },
  {
    title: "Animated Mob",
    description: "Smooth animation cycles for game-ready assets.",
    image: "/projects/project4.webp",
  },
  {
    title: "Stylized Villain",
    description: "Unique stylized design with strong silhouette.",
    image: "/projects/project5.webp",
  },
  {
    title: "Custom Weapon Pack",
    description: "Optimized weapon models made for servers.",
    image: "/projects/project6.webp",
  },
];

const videos = [
  { title: "Character Animation Showcase", youtubeId: "yTQT_3cm9tg" },
  { title: "Modeling Timelapse", youtubeId: "LeWJoBgMss0" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative">

      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold tracking-wide">Zeus Studio</h1>

          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#videos">Videos</a>
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>

          <a
            href="https://www.fiverr.com/zeus_hytale"
            target="_blank"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs text-zinc-300">
            <Sparkles size={14} />
            Game-ready assets • Clean animations • Fast delivery
          </p>

          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Captivating Models <br /> and Animations.
          </h2>

          <p className="max-w-2xl text-lg text-zinc-300">
            Zeus Studio crafts stylized characters, creatures, and animations
            built with clean topology and smooth motion.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View My Work
            </a>

            <a
              href="https://discord.gg/reDExuwD"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-500"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">Featured Work</h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="h-52 w-full bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">Video Showcase</h3>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
                <Video size={18} className="text-zinc-400" />
                <h4 className="font-semibold">{video.title}</h4>
              </div>

              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-3xl font-bold">Services</h3>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Wand2 />
            <h4 className="mt-4 text-lg font-semibold">Character Modeling</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Custom stylized characters optimized for game use.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Sparkles />
            <h4 className="mt-4 text-lg font-semibold">Animation</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Smooth idle loops, combat cycles and motion design.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Hammer />
            <h4 className="mt-4 text-lg font-semibold">Plugins</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Custom support and plugin features for servers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <h3 className="text-3xl font-bold">Let’s Work Together</h3>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://discord.gg/reDExuwD"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              <MessageCircle size={18} />
              Join Discord Server
            </a>

            <a
              href="https://www.fiverr.com/zeus_hytale"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-500"
            >
              <ExternalLink size={18} />
              Fiverr Profile
            </a>
          </div>
        </div>
      </section>

      {/* Floating Discord Button */}
      <a
        href="https://discord.gg/reDExuwD"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-indigo-500"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline font-semibold">Discord</span>
      </a>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Zeus Studio. All rights reserved.
      </footer>
    </div>
  );
}
