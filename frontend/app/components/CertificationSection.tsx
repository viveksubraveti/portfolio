import Image from "next/image";
import { LINKS } from "../config/links";

const certifications = [
  {
    logo: "/tf.png",
    link: LINKS.certifications.terraform,
  },
  {
    logo: "/cka.png",
    link: LINKS.certifications.cka,
  },
  {
    logo: "/kcna_new.png",
    link: LINKS.certifications.kcna,
  },
  {
    logo: "/ckad.png",
    link: LINKS.certifications.ckad,
  },
  {
    logo: "/saa.png",
    link: LINKS.certifications.saa,
  },
  {
    logo: "/aws-ai.png",
    link: LINKS.certifications.awsAi,
  },
  {
    logo: "/aws-cloud.png",
    link: LINKS.certifications.awsCloud,
  },
];

export default function CertificationSection() {
  return (
    <section
      id='certifications'
      className='bg-gray-50 dark:bg-gray-900 py-12 sm:py-20 transition-colors'
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
          Certifications
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link || "#"}
              target='_blank'
              rel='noopener noreferrer'
              className='
                flex items-center justify-center
                aspect-square
                h-40
                bg-white dark:bg-gray-800
                rounded-xl
                border-2 border-gray-300 dark:border-gray-700
                transition-all duration-300
                md:hover:scale-110
                md:hover:border-blue-500 md:dark:hover:border-blue-500
                md:hover:shadow-2xl
                md:hover:-translate-y-2
                md:hover:rotate-2
                cursor-pointer
                group
                active:scale-95
              '
            >
              <Image
                src={cert.logo}
                alt='Certification logo'
                width={160}
                height={160}
                className='object-contain transition-transform duration-300 md:group-hover:scale-110'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
