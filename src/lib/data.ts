// =============================================================================
// Types partagés — cohérents entre data.ts et les composants React
// =============================================================================

export interface NavLink {
  label: string
  href: string
}

export interface HeroQA {
  question: string
  answer: string
}

export interface ProblemBlock {
  title: string
  description: string
  icon: string
}

export interface SolutionStep {
  step: string
  title: string
  description: string
  icon: string
}

export interface UseCase {
  question: string
  answer: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

export interface CTAContent {
  title: string
  subtitle: string
  ctaLabel: string
}

export interface FooterLink {
  label: string
  href: string
}

// =============================================================================
// Données statiques centralisées — Landing EmailMind
// =============================================================================

export const NAVBAR_LINKS: NavLink[] = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Cas d\'usage', href: '#usecases' },
  { label: 'Tarifs', href: '#pricing' },
]

export const HERO_QUESTIONS: HeroQA[] = [
  {
    question: 'Quelle opportunité business dois-je prioriser cette semaine ?',
    answer: 'Suite à l\'analyse de vos 847 emails, 3 leads HotCRM attendent un suivi depuis plus de 5 jours. Le contact suivant représente le meilleur potentiel de conversion : Lucas Bernard, CEO de DataFlow — devis de 12k€ envoyé il y a 6 jours, sans réponse.',
  },
  {
    question: 'Pourquoi mon dernier prospect ne répond plus ?',
    answer: 'En analysant le thread avec Sophie Martin (InovaTech), le dernier email a été envoyé un mardi à 17h23. Les données montrent un taux de réponse 40% plus élevé les jeudis matin. Le suivi recommandé : Thursday 9h00, objet court "Quick follow-up — InovaTech partnership".',
  },
]

export const PROBLEM_BLOCKS: ProblemBlock[] = [
  {
    title: '80 emails par jour en moyenne',
    description: 'La boîte de réception devient un obstacle. Chaque message mérite attention, mais le temps manque.',
    icon: 'Mail',
  },
  {
    title: '20 minutes perdues par email',
    description: 'Lire, comprendre le contexte, identifier l\'urgence, trouver la réponse : le coût s\'accumule.',
    icon: 'Clock',
  },
  {
    title: 'Des deals qui s\'échappent',
    description: 'Un lead qui refroidit, un suivi oublié, un client mécontent — chaque jour sans action coûte de l\'argent.',
    icon: 'TrendingDown',
  },
]

export const SOLUTION_STEPS: SolutionStep[] = [
  {
    step: '01',
    title: 'Connecter',
    description: 'Liez vos boîtes email, CRM et calendar en 2 minutes. Aucune configuration technique requise.',
    icon: 'Plug',
  },
  {
    step: '02',
    title: 'Demander',
    description: 'Posez vos questions en langage naturel. "Quel client dois-je relancer cette semaine ?"',
    icon: 'MessageSquare',
  },
  {
    step: '03',
    title: 'Agir',
    description: 'Recevez des recommandations concrètes : qui relancer, quand, avec quel message.',
    icon: 'Zap',
  },
]

export const USE_CASES: UseCase[] = [
  {
    question: 'Quel lead dois-je relancer en priorité ?',
    answer: 'Basé sur l\'historique, le lead avec le plus fort potentiel de conversion et le plus long silence.',
  },
  {
    question: 'Que contient cet email long ?',
    answer: 'Résume le contenu en 3 points actionnables. Plus besoin de tout lire pour comprendre.',
  },
  {
    question: 'Ai-je oublié un suivi important ?',
    answer: 'Scanne les threads dormants et alerte sur les actions en retard avant qu\'il ne soit trop tard.',
  },
  {
    question: 'Quelle est la santé de ma relation client ?',
    answer: 'Score d\'engagement basé sur la fréquence, la réciprocité et le ton des échanges.',
  },
  {
    question: 'Comment répondre à ce client mécontent ?',
    answer: 'Propose une réponse calibrée selon l\'historique et le profil du client.',
  },
  {
    question: 'Quel est le meilleur moment pour envoyer ?',
    answer: 'Analyse les patterns de lecture du destinataire pour maximiser le taux d\'ouverture.',
  },
]

export const FEATURES: Feature[] = [
  {
    title: 'Cartographie intelligente',
    description: 'Visualisez votre réseau email : clients actifs, leads tièdes, relations à développer.',
    icon: 'Network',
  },
  {
    title: 'Langage naturel',
    description: 'Pas de syntaxe à apprendre. Posez vos questions comme à un assistant humain.',
    icon: 'MessageCircle',
  },
  {
    title: 'Contexte complet',
    description: 'Accédez à l\'historique complet d\'une relation sans quitter votre boîte de réception.',
    icon: 'Database',
  },
  {
    title: 'Mise à jour en temps réel',
    description: 'Chaque email reçu est instantanément analysé et intégré au contexte.',
    icon: 'RefreshCw',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Thomas Leclerc',
    role: 'CEO',
    company: 'Nexa Consulting',
    quote: 'J\'ai récupéré 3 heures par semaine sur ma gestion email. Mon chiffre d\'affaires a augmenté de 18% en 2 mois grâce aux relances opportunes.',
    initials: 'TL',
  },
  {
    name: 'Marie Dubois',
    role: 'Directrice Commerciale',
    company: 'SoftPro Solutions',
    quote: 'Avant, je répondais aux urgences. Maintenant, je suis proactive. EmailMind m\'a appris à prioriser.',
    initials: 'MD',
  },
  {
    name: 'Antoine Moreau',
    role: 'Fondateur',
    company: 'GrowthLab',
    quote: 'J\'ai réduit mon temps de réponse moyen de 4h à 45min. Mes clients sont plus satisfaits, mon pipeline se remplit mieux.',
    initials: 'AM',
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '0',
    description: 'Pour découvrir EmailMind et automomatiser vos premiers suivis.',
    features: [
      '50 emails analysés/mois',
      '3 questions/jour',
      '1 boîte email connectée',
      'Résumé d\'email basique',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Pour les professionnels qui gèrent leur activité par email.',
    features: [
      '2 000 emails analysés/mois',
      'Questions illimitées',
      '5 boîtes email connectées',
      'Cartographie relationnelle',
      'Alertes de suivi',
      'Support prioritaire',
    ],
    cta: 'Essai gratuit 14 jours',
    highlighted: true,
    badge: 'Populaire',
  },
  {
    name: 'Team',
    price: '89',
    description: 'Pour les équipes commerciales et de relation client.',
    features: [
      'Emails illimités',
      'Utilisateurs illimités',
      'Boîtes email illimitées',
      'Intégrations CRM natives',
      'Reporting avancé',
      'Account manager dédié',
    ],
    cta: 'Contacter les ventes',
    highlighted: false,
  },
]

export const CTA_BANNER: CTAContent = {
  title: 'Prêt à transformer votre boîte de réception ?',
  subtitle: 'Rejoignez les premiers utilisateurs et reprenez le contrôle de vos emails.',
  ctaLabel: 'Démarrer gratuitement',
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Mentions légales', href: '#' },
  { label: 'CGU', href: '#' },
  { label: 'Confidentialité', href: '#' },
  { label: 'Contact', href: '#' },
]
