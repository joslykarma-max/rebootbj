// components/globe/earthTexture.ts
// Génère une texture canvas equirectangulaire pour le globe 3D
// Couleurs claires et contrastées pour être visibles sur la sphère 3D

const project = (lon: number, lat: number, w: number, h: number) => ({
  x: ((lon + 180) / 360) * w,
  y: ((90 - lat) / 180) * h,
})

// ── AFRIQUE COMPLÈTE ──
const AFRICA: [number, number][] = [
  [-17.5, 14.8], [-17.0, 10.0], [-15.0, 8.0], [-13.5, 7.0],
  [-12.0, 5.5], [-10.5, 4.5], [-8.0, 3.5], [-6.0, 2.5],
  [-3.0, 1.5], [0.0, 1.2], [2.0, 0.5], [5.0, -1.0],
  [8.0, -3.0], [10.0, -3.5], [11.0, -4.0], [12.5, -5.0],
  [14.0, -6.0], [15.0, -7.0], [16.0, -8.0], [16.5, -10.0],
  [17.0, -12.0], [17.0, -14.0], [16.0, -16.0], [15.0, -18.0],
  [14.0, -20.0], [13.0, -22.0], [13.0, -25.0], [15.0, -27.0],
  [17.0, -29.0], [18.5, -30.0], [19.5, -32.0], [20.5, -34.0],
  [22.0, -35.5], [24.0, -34.0], [26.0, -33.0], [28.0, -33.0],
  [30.0, -32.0], [32.0, -30.0], [34.0, -26.0], [35.0, -22.0],
  [36.0, -18.0], [37.0, -14.0], [37.5, -10.0], [40.0, -6.0],
  [41.0, -2.0], [42.0, 2.0], [44.0, 6.0], [45.0, 8.0],
  [46.0, 10.0], [47.0, 12.0], [45.0, 15.0], [43.0, 17.0],
  [42.0, 19.0], [40.0, 21.0], [37.0, 22.0], [35.0, 24.0],
  [33.0, 27.0], [30.0, 30.0], [28.0, 31.0], [25.0, 31.5],
  [23.0, 31.5], [21.0, 31.0], [19.0, 30.5], [17.0, 30.5],
  [15.0, 30.0], [13.0, 28.0], [11.0, 24.0], [9.0, 22.0],
  [8.0, 20.0], [8.0, 18.0], [9.0, 16.0], [10.0, 14.0],
  [10.5, 12.0], [10.0, 10.0], [8.5, 8.5], [7.0, 6.5],
  [5.5, 5.0], [4.0, 4.5], [2.0, 4.0], [0.0, 4.0],
  [-2.0, 4.5], [-4.0, 5.0], [-6.0, 5.0], [-8.0, 5.5],
  [-10.0, 6.5], [-11.5, 7.5], [-13.0, 8.5], [-14.5, 9.5],
  [-15.0, 11.0], [-15.5, 12.5], [-16.0, 13.5], [-17.5, 14.8],
]

// ── EUROPE (simplifié) ──
const EUROPE: [number, number][] = [
  [-9.0, 36.0], [-8.5, 38.0], [-9.5, 39.0], [-8.0, 44.0],
  [-2.0, 43.5], [3.0, 43.5], [7.0, 44.0], [8.0, 46.0],
  [10.0, 47.5], [12.0, 47.0], [14.0, 46.5], [16.0, 46.0],
  [18.0, 45.0], [20.0, 44.5], [22.0, 44.0], [24.0, 45.0],
  [26.0, 45.5], [28.0, 46.0], [30.0, 46.5], [32.0, 47.0],
  [34.0, 45.0], [36.0, 43.0], [36.0, 41.0], [35.0, 38.0],
  [33.0, 37.0], [30.0, 36.5], [28.0, 36.0], [25.0, 36.0],
  [22.0, 37.0], [18.0, 37.5], [15.0, 38.0], [12.0, 38.0],
  [10.0, 38.0], [8.0, 38.5], [5.0, 37.5], [3.0, 37.0],
  [0.0, 37.0], [-2.0, 36.5], [-5.0, 36.0], [-9.0, 36.0],
]

// ── ASIE DU SUD-OUEST + péninsule arabique ──
const ARABIAN: [number, number][] = [
  [36.0, 28.0], [39.0, 22.0], [43.0, 13.0], [45.0, 12.0],
  [50.0, 12.0], [55.0, 15.0], [57.0, 20.0], [58.0, 24.0],
  [57.0, 26.0], [54.0, 24.0], [50.0, 24.0], [48.0, 25.0],
  [46.0, 24.0], [44.0, 22.0], [42.0, 18.0], [40.0, 16.0],
  [38.0, 14.0], [36.0, 12.0], [36.0, 28.0],
]

// ── ASIE (très simplifié) ──
const ASIA: [number, number][] = [
  [35.0, 36.0], [40.0, 38.0], [44.0, 40.0], [48.0, 42.0],
  [52.0, 44.0], [56.0, 42.0], [60.0, 44.0], [64.0, 42.0],
  [68.0, 38.0], [72.0, 36.0], [74.0, 32.0], [72.0, 28.0],
  [68.0, 24.0], [65.0, 22.0], [62.0, 22.0], [60.0, 25.0],
  [57.0, 26.0], [56.0, 28.0], [58.0, 32.0], [56.0, 36.0],
  [52.0, 38.0], [48.0, 38.0], [44.0, 38.0], [40.0, 36.0],
  [36.0, 36.0], [35.0, 36.0],
]

// ── BÉNIN — vraies coordonnées GeoJSON ──
const BENIN_COORDS: [number, number][] = [
  [2.692, 6.259], [2.723, 6.284], [2.912, 6.362], [3.150, 6.392],
  [3.420, 6.430], [3.576, 6.695], [3.646, 6.999], [3.714, 7.487],
  [3.801, 7.993], [3.798, 8.489], [3.752, 8.961], [3.716, 9.250],
  [3.644, 9.407], [3.601, 9.802], [3.572, 11.328], [3.611, 11.660],
  [3.492, 11.862], [3.120, 12.051], [2.848, 12.236], [2.490, 12.230],
  [2.370, 12.074], [2.154, 11.941], [1.936, 11.641], [1.447, 11.548],
  [1.243, 11.111], [0.900, 10.997], [0.772, 10.471], [1.078, 10.176],
  [1.425, 9.825], [1.463, 9.335], [1.665, 9.129], [1.619, 6.832],
  [1.865, 6.142], [2.692, 6.259],
]

// ── AMÉRIQUE DU SUD (très simplifié) ──
const SOUTH_AMERICA: [number, number][] = [
  [-73.0, 11.0], [-70.0, 12.0], [-65.0, 11.0], [-62.0, 11.5],
  [-60.0, 7.0], [-58.0, 4.0], [-52.0, 4.5], [-51.0, 2.0],
  [-50.0, -1.0], [-49.0, -3.0], [-38.0, -5.0], [-35.0, -8.0],
  [-35.5, -13.0], [-38.0, -17.0], [-40.0, -22.0], [-43.0, -23.0],
  [-45.0, -24.0], [-48.0, -28.0], [-49.0, -32.0], [-52.0, -34.0],
  [-55.0, -35.0], [-58.0, -38.0], [-62.0, -40.0], [-65.0, -43.0],
  [-66.0, -46.0], [-68.0, -50.0], [-68.0, -55.0], [-65.0, -55.0],
  [-63.0, -52.0], [-60.0, -50.0], [-58.0, -48.0], [-60.0, -45.0],
  [-63.0, -42.0], [-65.0, -40.0], [-68.0, -36.0], [-70.0, -32.0],
  [-72.0, -28.0], [-72.0, -24.0], [-70.0, -18.0], [-76.0, -14.0],
  [-80.0, -8.0], [-80.0, -2.0], [-78.0, 2.0], [-76.0, 4.0],
  [-75.0, 8.0], [-73.0, 11.0],
]

function drawPolygon(
  ctx: CanvasRenderingContext2D,
  coords: [number, number][],
  w: number,
  h: number,
  fill?: string,
  stroke?: string,
  strokeW = 0.8
) {
  ctx.beginPath()
  coords.forEach(([lon, lat], i) => {
    const { x, y } = project(lon, lat, w, h)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
  ctx.closePath()
  if (fill) { ctx.fillStyle = fill; ctx.fill() }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeW; ctx.stroke() }
}

export function createEarthTexture(): HTMLCanvasElement {
  const W = 2048
  const H = 1024
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // ── OCÉAN — bleu profond visible ──
  ctx.fillStyle = '#0C2240'
  ctx.fillRect(0, 0, W, H)

  // Gradient d'atmosphère
  const atmoGrad = ctx.createLinearGradient(0, 0, 0, H)
  atmoGrad.addColorStop(0, 'rgba(10,20,60,0.4)')
  atmoGrad.addColorStop(0.5, 'rgba(5,15,45,0.0)')
  atmoGrad.addColorStop(1, 'rgba(10,20,60,0.4)')
  ctx.fillStyle = atmoGrad
  ctx.fillRect(0, 0, W, H)

  // ── CONTINENTS ──
  // Europe
  drawPolygon(ctx, EUROPE, W, H, '#5C8A42', 'rgba(100,160,70,0.4)', 0.8)
  // Péninsule arabique
  drawPolygon(ctx, ARABIAN, W, H, '#8A7A40', 'rgba(160,140,60,0.3)', 0.6)
  // Asie
  drawPolygon(ctx, ASIA, W, H, '#5C8A42', 'rgba(100,160,70,0.3)', 0.6)
  // Amérique du Sud
  drawPolygon(ctx, SOUTH_AMERICA, W, H, '#4E7A36', 'rgba(90,150,60,0.3)', 0.6)

  // ── AFRIQUE — vert plus clair pour contraste ──
  drawPolygon(ctx, AFRICA, W, H, '#4A8030', 'rgba(90,150,55,0.5)', 1)

  // ── BÉNIN — orange vif sur fond continent visible ──
  drawPolygon(ctx, BENIN_COORDS, W, H, '#E8820C', 'rgba(255,160,40,0.8)', 1.5)

  // Léger halo autour du Bénin
  const bc = project(2.3, 9.3, W, H)
  const glow = ctx.createRadialGradient(bc.x, bc.y, 10, bc.x, bc.y, 100)
  glow.addColorStop(0, 'rgba(232,130,12,0.18)')
  glow.addColorStop(1, 'rgba(232,130,12,0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(bc.x, bc.y, 100, 0, Math.PI * 2)
  ctx.fill()

  // ── GRILLE GÉOGRAPHIQUE (très subtile) ──
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'
  ctx.lineWidth = 0.5
  // Méridiens tous les 30°
  for (let lon = -180; lon <= 180; lon += 30) {
    const x = ((lon + 180) / 360) * W
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, H)
    ctx.stroke()
  }
  // Parallèles tous les 30°
  for (let lat = -90; lat <= 90; lat += 30) {
    const y = ((90 - lat) / 180) * H
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(W, y)
    ctx.stroke()
  }
  // Équateur légèrement plus visible
  ctx.strokeStyle = 'rgba(255,255,255,0.07)'
  ctx.lineWidth = 1
  const eqY = H / 2
  ctx.beginPath()
  ctx.moveTo(0, eqY)
  ctx.lineTo(W, eqY)
  ctx.stroke()

  return canvas
}
