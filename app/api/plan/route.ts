import Anthropic from '@anthropic-ai/sdk'

const MODEL = 'claude-sonnet-4-6'

type PlanInput = {
  group: string
  days: number
  interests: string[]
  budget: string
  period: string
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Clé API non configurée côté serveur' }, { status: 500 })
  }

  let body: PlanInput
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const { group, days, interests, budget, period } = body
  if (!group || !days || !interests?.length || !budget || !period) {
    return Response.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const client = new Anthropic({ apiKey })

  const prompt = `Tu es un guide expert du Bénin travaillant pour l'agence Reboot BJ à Cotonou.
Crée un itinéraire détaillé et immersif pour le voyageur suivant :

- Groupe : ${group}
- Durée : ${days} jours
- Centres d'intérêt : ${interests.join(', ')}
- Budget : ${budget}
- Période : ${period}

Format attendu (markdown léger, sans titres H1/H2) :
- Une accroche de 2 lignes qui donne envie.
- Un planning jour par jour, avec pour chaque jour : lieu, activités, repas suggéré, hébergement recommandé.
- Conseils pratiques (transport, santé, culture) en fin d'itinéraire.
- Termine par : "Demandez votre devis personnalisé via WhatsApp."

Reste chaleureux, fier du Bénin, précis. 500-800 mots.`

  try {
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map(b => b.text)
      .join('\n')

    return Response.json({ content: text })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Erreur Claude API'
    return Response.json({ error: msg }, { status: 502 })
  }
}
