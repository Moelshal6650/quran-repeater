import { useEffect, useState } from "react";

export default function QuranRepeater() {
  const [ayahs, setAyahs] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah/3/ar.alafasy")
      .then(res => res.json())
      .then(data => setAyahs(data.data.ayahs));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>سورة آل عمران</h2>

      {ayahs.map(a => (
        <div key={a.number}>
          <p>{a.text}</p>
          <audio controls src={a.audio}></audio>
          <hr />
        </div>
      ))}
    </div>
  );
}        value={surah}
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
