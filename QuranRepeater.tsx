import { useRef, useState } from "react";

export default function QuranRepeater() {
  const [surah, setSurah] = useState("001");
  const [ayah, setAyah] = useState(1);
  const [repeat, setRepeat] = useState(1);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const countRef = useRef(0);

  const pad = (n: number) => n.toString().padStart(3, "0");
  const url = `https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/${surah}${pad(
    ayah
  )}.mp3`;

  const play = () => {
    countRef.current = 0;
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  const onEnd = () => {
    countRef.current++;
    if (countRef.current < repeat) {
      audioRef.current?.play();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>كَرِّر</h1>

      <input
        placeholder="السورة (001)"
        value={surah}
        onChange={(e) => setSurah(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="الآية"
        value={ayah}
        onChange={(e) => setAyah(+e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="عدد التكرار"
        value={repeat}
        onChange={(e) => setRepeat(+e.target.value)}
      />
      <br /><br />

      <button onClick={play}>تشغيل</button>

      <audio ref={audioRef} onEnded={onEnd} />
    </div>
  );
    }
