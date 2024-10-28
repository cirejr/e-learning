import {
  Camera,
  CheckCircle,
  BarChart,
  Users,
  Globe,
  ArrowRight,
  Newspaper,
  MessageSquare,
  Tv,
  BookOpen,
  Speech,
  Laptop,
  Trophy,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Features() {
  const features = [
    {
      icon: Newspaper,
      title: 'Journalisme',
      description:
        'Formation approfondie en journalisme écrit, audiovisuel et numérique.',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description:
        "Développement de compétences en relations publiques et communication d'entreprise.",
    },
    {
      icon: Speech,
      title: 'Langues',
      description:
        'Cours en arabe, français, anglais et langues nationales pour une portée globale.',
    },
    {
      icon: Laptop,
      title: 'Stratégies Numériques',
      description:
        'Maîtrise des outils numériques et des stratégies de communication en ligne.',
    },
    {
      icon: Users,
      title: 'Réseau Professionnel',
      description:
        "Opportunités de networking et stages dans l'industrie médiatique.",
    },
    {
      icon: BookOpen,
      title: 'Apprentissage Pratique',
      description:
        "Accent mis sur l'expérience pratique et les projets du monde réel.",
    },
  ];

  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight'>
            Points Clés
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Explorez nos programmes phares, allant du journalisme
            d&apos;investigation à la communication stratégique, en passant par
            le marketing digital et la gestion des médias sociaux. Chacun de nos
            cours est conçu pour vous fournir les compétences pratiques et les
            connaissances nécessaires pour exceller dans le monde des médias
            modernes.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-3'>
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className='pt-6'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <feature.icon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='mb-2 text-lg font-semibold'>{feature.title}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
