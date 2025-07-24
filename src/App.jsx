import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import "./App.css";
import kaliLogo from "./assets/kali.svg";
import burpLogo from "./assets/burp.svg";
import metasploitLogo from "./assets/metasploit.svg";
import wiresharkLogo from "./assets/wireshark.svg";

// Заглушка: путь к фанфаре (заменить на свой файл в public/fanfare.mp3)
const FANFARE_URL = import.meta.env.BASE_URL + "fanfare.mp3";

const flyingIcons = [
  { src: kaliLogo, alt: "Kali Linux", style: { top: "10%", left: "5%", animationDelay: "0s" } },
  { src: burpLogo, alt: "Burp Suite", style: { top: "60%", left: "10%", animationDelay: "1s" } },
  { src: metasploitLogo, alt: "Metasploit", style: { top: "30%", left: "85%", animationDelay: "0.5s" } },
  { src: wiresharkLogo, alt: "Wireshark", style: { top: "75%", left: "70%", animationDelay: "1.5s" } },
];

export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const sound = new Howl({ src: [FANFARE_URL], volume: 0.7 });
    sound.play();
  }, []);

  return (
    <div className="gd-bg">
      <AnimatePresence mode="wait">
        {page === 0 && (
          <motion.div
            key="page1"
            className="gd-card"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
          >
            <motion.h1
              className="gd-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              С Днём Рождения, Антон! 🎉
            </motion.h1>
            <motion.p
              className="gd-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Пусть твой путь в информационной безопасности будет ярким и успешным, как уровни в Geometry Dash!<br/>
              Желаю новых побед, крутых проектов и нескучной учёбы!
            </motion.p>
            <motion.button
              className="gd-btn"
              style={{ marginTop: 24 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={() => setPage(1)}
              
            >
              Дальше →
            </motion.button>
          </motion.div>
        )}
        {page === 1 && (
          <motion.div
            key="page2"
            className="gd-card"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.15 }}
            style={{ overflow: "visible" }}
          >
            <div className="flying-icons-inside">
              {flyingIcons.map((icon, i) => (
                <motion.img
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  className="flying-icon"
                  style={icon.style}
                  initial={{ y: 0, rotate: 0, opacity: 0.7 }}
                  animate={{ y: [0, -40, 0], rotate: [0, 360, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            <motion.h2
              className="gd-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Развивайся в ИБ!
            </motion.h2>
            <motion.p
              className="gd-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
            >
              Изучай новые инструменты, участвуй в CTF и пусть твои навыки всегда будут на высоте!
            </motion.p>
            <motion.div
              className="gd-books"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.5 }}
            >
              <a className="gd-btn" href="https://drive.google.com/file/d/1fGM0pOe5NIR5brmRhHszSagNX_ZauvQa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Скачать The Web Application Hacker's Handbook (2011)
              </a>
              <a className="gd-btn" href="https://drive.google.com/file/d/1OyJxdvMlFkJmCY1NBbRTZMq8aKz5x3ET/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Скачать Аудит безопасности информационных систем
              </a>
            </motion.div>
            <motion.div
              className="gd-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.05, duration: 0.5 }}
            >
              <span>С любовью, твой друг :)</span>
            </motion.div>
            <motion.button
              className="gd-btn"
              style={{ marginTop: 24 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.45, duration: 0.5 }}
              onClick={() => setPage(0)}
            >
              ← Назад
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {page === 0 && (
        <div className="gd-anim">
          <div className="gd-cube"></div>
          <div className="gd-spikes"></div>
        </div>
      )}
      {page === 1 && (
        <div className="flying-icons">
          {flyingIcons.map((icon, i) => (
            <motion.img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="flying-icon"
              style={icon.style}
              initial={{ y: 0, rotate: 0, opacity: 0.7 }}
              animate={{ y: [0, -40, 0], rotate: [0, 360, 0], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
