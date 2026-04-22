export default function StatsStrip() {
  const stats = [
    { num: '12', txt: 'Rois du Dahomey' },
    { num: '500+', txt: "Ans d'histoire" },
    { num: '3', txt: 'Sites UNESCO' },
    { num: '361', txt: "Espèces d'oiseaux" },
    { num: '1er', txt: 'Metaverse touristique africain' },
  ]

  return (
    <div className="intro-strip">
      {stats.map((s, i) => (
        <div key={s.txt} style={{ display: 'contents' }}>
          {i > 0 && <div className="strip-sep" />}
          <div className="strip-item">
            <span className="strip-num">{s.num}</span>
            <span className="strip-dot" />
            <span className="strip-txt">{s.txt}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
