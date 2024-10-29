import Categories from './_components/categories';
import Posts from './_components/posts';
import { getUser } from '@/data-access/data';
import { getForumTopics } from '@/data-access/forum';
import ForumPostCreation from './_components/post-form';
import SheetWrapper from '@/components/global/sheet-wrapper';

export default async function ForumPage() {
  const [user, topics] = await Promise.all([getUser(), getForumTopics()]);
  return (
    <div className='min-h-screen bg-background'>
      {/* Section Hero */}
      <section className='bg-primary py-12'>
        <div className='container'>
          <div className='text-center text-primary-foreground'>
            <h1 className='text-3xl font-bold sm:text-4xl'>
              Forum des étudiants
            </h1>
            <p className='mt-4 text-lg text-primary-foreground/90'>
              Participez aux échanges avec d'autres étudiants et professionnels
            </p>
          </div>
        </div>
      </section>

      <div className='container py-12'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Catégories */}
          <Categories />

          {/* Publications récentes */}
          <div className='md:col-span-2'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-2xl font-bold'>Publications récentes</h2>
              <SheetWrapper
                title='Créer une nouvelle publication'
                triggerTitle='Nouvelle publication'
              >
                <ForumPostCreation
                  authorId={user?.id as string}
                  topics={topics}
                />
              </SheetWrapper>
            </div>

            {/* Liste des publications récentes */}
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}
