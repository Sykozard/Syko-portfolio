import { SiDiscord, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#09090B]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Kaustav
              </span>
              <span className="text-[10px] font-medium text-white/35 tracking-widest uppercase">aka Syko</span>
            </div>
            <p className="mt-3 text-sm text-white/45 max-w-xs">
              Building digital experiences with creativity and code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://discord.com/users/Fnb4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:text-[#5865F2]"
              aria-label="Discord"
            >
              <SiDiscord size={18} />
            </a>
            <a
              href="https://instagram.com/r1wings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
              aria-label="Instagram"
            >
              <SiInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-8 text-center text-xs text-white/30">
          © 2024 Kaustav. All rights reserved. Built with care.
        </div>
      </div>
    </footer>
  );
}
