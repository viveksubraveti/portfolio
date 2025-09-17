import Image from "next/image";

const certifications = [
  {
    logo: "/tf.png",
    link: "https://www.credly.com/badges/6fb9f186-725a-42be-a6bb-72675d7e4429",
  },
  {
    logo: "/cka.png",
    link: "https://www.credly.com/badges/250dbc3e-90c9-4e2e-9423-93be334b3b4f",
  },
  {
    logo: "/kcna_new.png",
    link: "https://www.credly.com/badges/d90d212f-09ad-4aeb-b712-3de74c8e2230",
  },
  {
    logo: "/ckad.png",
    link: "https://www.credly.com/badges/643d1e9d-d2e3-4330-9ce2-3f1ef3998906",
  },
  {
    logo: "/saa.png",
    link: "https://www.credly.com/badges/e72143bc-06fd-4391-9048-5f50d7ca952f",
  },
  {
    logo: "/aws-ai.png",
    link: "https://www.credly.com/badges/1378ae3c-ae6b-4cce-9889-9ba625da5663",
  },
  {
    logo: "/aws-cloud.png",
    link: "https://www.credly.com/badges/4a1bbee5-cb68-4641-8ed0-edd6ac2e7fd8",
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
            <div
              key={idx}
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
              onClick={() => window.open(cert.link, "_blank")}
            >
              <Image
                src={cert.logo}
                alt='Certification logo'
                width={160}
                height={160}
                className='object-contain transition-transform duration-300 md:group-hover:scale-110'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
