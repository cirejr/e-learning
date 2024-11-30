import { AdmissionHero } from './_components/admission-hero';
import { Requirements } from './_components/requirements';
import { Timeline } from './_components/timeline';
import { FAQ } from './_components/FAQ';

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionHero />
      <Requirements />
      <Timeline />
      <FAQ />
    </>
  );
}
