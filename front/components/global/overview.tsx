import React from 'react';

export default function Overview() {
  return (
    <section className='bg-muted py-40'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center text-3xl font-bold text-gray-800'>
          Aperçu du Centre
        </h2>
        <p className='mx-auto max-w-3xl text-center text-muted-foreground'>
          Le Centre de Formation en Journalisme et Communication (CFTS) joue un
          rôle crucial dans le renforcement des compétences des journalistes et
          des professionnels de la communication. Notre mission est de former la
          prochaine génération de leaders médiatiques, équipés pour exceller
          dans un paysage médiatique en constante évolution.
        </p>
      </div>
    </section>
  );
}
