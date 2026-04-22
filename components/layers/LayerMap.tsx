'use client'
// components/layers/LayerMap.tsx
// Niveau 1 — Carte Afrique de l'Ouest avec 7 hotspots destinations béninoises

import { useStore } from '@/store/useStore'

type Hotspot = {
  id: string
  cx: number
  cy: number
  label: string
  type: string
  color: string
  size?: number
  anchor?: 'left' | 'right'
  animated?: boolean
}

const HOTSPOTS: Hotspot[] = [
  { id: 'cotonou', cx: 210, cy: 408, label: 'COTONOU', type: 'Capitale économique', color: 'rgba(255,255,255,0.7)', animated: true, anchor: 'right' },
  { id: 'abomey', cx: 225, cy: 320, label: 'ABOMEY', type: 'Histoire & UNESCO', color: '#E8820C', animated: true, anchor: 'right' },
  { id: 'ouidah', cx: 196, cy: 400, label: 'OUIDAH', type: 'Vodoun & Mémoire', color: 'rgba(255,255,255,0.5)', anchor: 'left' },
  { id: 'ganvie', cx: 218, cy: 396, label: 'GANVIÉ', type: 'Cité lacustre', color: 'rgba(100,180,255,0.5)', anchor: 'right' },
  { id: 'pendjari', cx: 218, cy: 110, label: 'PENDJARI', type: 'Safari & Nature', color: 'rgba(80,180,60,0.7)', animated: true, anchor: 'right' },
  { id: 'atacora', cx: 205, cy: 160, label: 'ATACORA', type: 'Montagnes & Tata Somba', color: 'rgba(180,130,60,0.6)', anchor: 'left' },
  { id: 'porto', cx: 228, cy: 406, label: 'PORTO-NOVO', type: 'Capitale constitutionnelle', color: 'rgba(255,255,255,0.3)', anchor: 'right' },
]

export default function LayerMap() {
  const { openDest, setCursorMode } = useStore()

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, #0D1A0A 0%, #060D04 50%, #000 100%)',
      }}
    >
      {/* Grille terrain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <svg
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        width="680"
        height="580"
        viewBox="0 0 680 580"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="beninGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(232,130,12,0.15)" />
            <stop offset="100%" stopColor="rgba(232,130,12,0)" />
          </radialGradient>
        </defs>

        {/* Niger */}
        <path
          d="M50 10 Q120 8 200 12 Q280 10 340 20 Q400 16 460 20 Q520 18 580 22 Q610 20 640 25 L650 30 Q620 28 590 26 Q530 22 470 24 Q410 20 350 24 Q290 14 210 16 Q140 12 70 14 Z"
          fill="rgba(255,255,255,.015)"
        />
        <text x="340" y="18" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,.08)" letterSpacing="3" fontFamily="sans-serif">NIGER</text>

        {/* Burkina Faso */}
        <path
          d="M160 28 Q220 18 290 24 L310 28 L310 80 L270 88 L220 82 L175 88 L150 80 Z"
          fill="rgba(255,255,255,.018)"
          stroke="rgba(255,255,255,.04)"
          strokeWidth=".5"
        />
        <text x="230" y="56" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,.1)" letterSpacing="2" fontFamily="sans-serif">BURKINA FASO</text>

        {/* Togo */}
        <path
          d="M90 80 Q130 72 160 80 L170 90 L175 200 L165 280 L155 340 L130 360 L100 340 L80 300 L75 240 L80 180 L78 130 Z"
          fill="rgba(255,255,255,.015)"
          stroke="rgba(255,255,255,.035)"
          strokeWidth=".5"
        />
        <text x="128" y="210" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,.09)" letterSpacing="1.5" fontFamily="sans-serif" transform="rotate(-5,128,210)">TOGO</text>

        {/* Nigeria */}
        <path
          d="M370 70 Q430 58 500 64 Q560 60 610 76 Q640 90 650 120 Q660 155 655 190 Q665 230 655 268 Q660 305 645 338 Q635 365 615 385 L590 400 L555 390 L520 370 L490 350 L460 330 L430 310 L400 280 L380 250 L360 220 L345 190 L342 160 L348 130 L360 104 Z"
          fill="rgba(255,255,255,.02)"
          stroke="rgba(255,255,255,.04)"
          strokeWidth=".5"
        />
        <text x="510" y="220" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.1)" letterSpacing="2" fontFamily="sans-serif">NIGERIA</text>

        {/* Bénin — mis en valeur */}
        <path
          d="M168 80 Q200 72 230 76 Q265 72 292 82 Q308 95 315 120 Q320 148 316 178 Q322 210 316 240 Q320 270 312 298 Q316 325 305 350 Q295 372 280 390 Q263 405 248 412 Q232 418 218 414 Q204 408 194 398 Q182 385 175 368 Q165 350 162 330 Q156 308 158 286 Q152 262 155 240 Q148 215 152 192 Q146 168 150 146 Q150 124 155 106 Q160 92 168 80Z"
          fill="url(#beninGlow)"
          stroke="rgba(232,130,12,0.45)"
          strokeWidth="1.2"
        />

        {/* Fleuves */}
        <path d="M220 390 Q228 360 232 330 Q236 300 240 270 Q244 240 242 210" fill="none" stroke="rgba(100,150,200,0.12)" strokeWidth="1.5" />
        <path d="M190 395 Q196 370 200 340 Q204 310 208 282" fill="none" stroke="rgba(100,150,200,0.08)" strokeWidth="1" />

        {/* Côte */}
        <path d="M155 405 Q175 415 198 420 Q220 424 245 420 Q268 414 288 404" fill="none" stroke="rgba(100,180,255,0.15)" strokeWidth="2" />

        {/* Golfe de Guinée */}
        <path d="M40 440 Q200 430 342 435 Q480 428 640 440" fill="none" stroke="rgba(100,150,255,0.06)" strokeWidth="1.5" />
        <text x="340" y="470" textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(100,150,255,0.1)" letterSpacing="2" fontStyle="italic">Golfe de Guinée</text>

        {/* Label BÉNIN */}
        <text x="242" y="252" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="22" fontWeight="900" fill="rgba(232,130,12,0.5)" letterSpacing="3">BÉNIN</text>

        {/* Hotspots */}
        {HOTSPOTS.map((hs) => (
          <g
            key={hs.id}
            onClick={() => openDest(hs.id)}
            onMouseEnter={() => setCursorMode('poi', hs.label + ' →')}
            onMouseLeave={() => setCursorMode('default')}
            style={{ cursor: 'none' }}
          >
            <circle cx={hs.cx} cy={hs.cy} r="16" fill="transparent" />
            <circle cx={hs.cx} cy={hs.cy} r="5" fill={hs.color} />
            {hs.animated && (
              <>
                <circle cx={hs.cx} cy={hs.cy} r="10" fill="none" stroke={hs.color.replace(/[\d.]+\)$/, '0.3)')} strokeWidth="1">
                  <animate attributeName="r" values="10;22" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx={hs.cx} cy={hs.cy} r="14" fill="none" stroke={hs.color.replace(/[\d.]+\)$/, '0.15)')} strokeWidth="1">
                  <animate attributeName="r" values="14;32" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                </circle>
              </>
            )}
            <text
              x={hs.anchor === 'left' ? hs.cx - 12 : hs.cx + 12}
              y={hs.cy + 4}
              textAnchor={hs.anchor === 'left' ? 'end' : 'start'}
              fontSize="9"
              fill={hs.color}
              letterSpacing="2"
              fontFamily="sans-serif"
              fontWeight="500"
            >
              {hs.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Légende */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 52,
          maxWidth: 260,
          opacity: 0,
          animation: 'fadeIn 0.6s ease 1.2s forwards',
        }}
      >
        <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,.18)', marginBottom: 8 }}>
          Points lumineux
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { color: '#E8820C', label: 'Sites historiques & culturels' },
            { color: 'rgba(80,180,60,.7)', label: 'Nature & Safaris' },
            { color: 'rgba(255,255,255,.5)', label: 'Villes & côtes' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,.25)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
