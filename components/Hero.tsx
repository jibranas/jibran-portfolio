import Image from 'next/image';

export default function Hero() {
  return (
    <section className="px-2 pt-16 pb-8 md:px-8 md:py-12 max-w-7xl mx-auto">
      <div className="relative bg-gray-800 rounded-t-[2.5rem] rounded-b-2xl pt-14 pb-2 md:pt-8 md:pb-12 px-6 md:px-12">
        {/* Top row with image and heading */}
        <div className="flex flex-row md:flex-row items-start gap-4 md:gap-8">
          {/* Profile Photo - Protruding from top */}
          <div className="flex-shrink-0 -mt-24 md:-mt-12">
            <div
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg overflow-hidden border-4 border-gray-800 bg-white"
            >
              <Image
                src="/images/Jibran_Asif_Shareef.jpg"
                alt="Jibran Asif Shareef"
                width={400}
                height={400}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>

          {/* Header Text */}
          <div className="flex-1 text-left -mt-14 md:mt-0 md:pt-4">
            <h1 className="text-base md:text-5xl font-bold text-white mb-2 mt-4 md:mt-0">
              Hey, I&apos;m{' '}
              <span className="px-2 py-1 md:px-3 md:py-1 rounded-lg inline-block" style={{ backgroundColor: "#175cff" }}>
                Jibran Asif Shareef
              </span>
            </h1>
            {/* Desktop: show paragraph here */}
            <div className="hidden md:block mt-4 text-right">
              <p className="text-2xl text-gray-200 mb-2">and I&apos;d love to be a Product Manager at</p>
              <div className="flex items-center justify-end gap-3 text-3xl font-semibold text-white">
                <span>Udacity</span>
                <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                  <Image
                    src="/images/Udacity_logo.png"
                    alt="Udacity Logo"
                    width={32}
                    height={32}
                    style={{ display: 'inline' }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: show paragraph below, spanning full width */}
        <div className="md:hidden text-sm text-gray-200 text-center">
          <p className="mb-2">and I&apos;d love to be a Product Manager at</p>
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <span>Udacity</span>
            <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-lg">
              <Image
                src="/images/Udacity_logo.png"
                alt="Udacity Logo"
                width={24}
                height={24}
                style={{ display: 'inline' }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
