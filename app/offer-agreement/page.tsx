"use client";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { offerAgreement } from "@/constants/offerAgreement";

const OfferAgreement = () => {
  return (
    <>
      <Analytics />
      <Navbar />
      <main className='main font-medium pt-[90px] font-sans lg:pt-[120px] pb-[30px] px-6 lg:px-32'>
        <div className='mb-4 lg:mb-8'>
          <h1 className='font-bold text-2xl lg:text-3xl lg:mb-1'>
            ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ НА ПЛАТНЕ НАДАННЯ ОСВІТНІХ ТА ІНФОРМАЦІЙНИХ
            ПОСЛУГ
          </h1>
          <span className='font-semibold'>Україна, м. Київ</span>
        </div>
        <p className=''>
          Цей договір (далі – «Договір»), укладений між ФОП Хилею Олександром
          Олександровичом, який діє згідно з чинним законодавством України та
          надалі іменується як «Виконавець», з однієї сторони, і будь-якою
          фізичною особою, що приймає умови цієї публічної оферти, надалі
          іменованою як «Замовник», з іншої сторони (разом – «Сторони»),
          укладений відповідно до ст. 633, 641 та 642 Цивільного кодексу України
          на наступних умовах.
        </p>
        {offerAgreement && (
          <ul>
            {offerAgreement.map(({ title, terms }) => (
              <li key={title}>
                <h2 className='my-3 font-bold text-lg'>{title}</h2>
                {terms && (
                  <ul>
                    {terms.map(({ title, subterms }) => (
                      <li key={title}>
                        <h3 className='my-1'>{title}</h3>
                        {subterms && (
                          <ul className='flex flex-col gap-2 list-disc pl-6'>
                            {subterms.map(({ title }) => (
                              <li key={title}>{title}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}

        <div>
          <h2 className='my-3 font-bold'>АДРЕСА ТА КОНТАКТИ ВИКОНАВЦЯ:</h2>
          <p className='font-extrabold'>
            ФОП Хиля Олександр Олександрович <br />
            м. Київ, Україна <br />
            Електронна пошта:{" "}
            <a
              className='text-[#922bff] hover:underline'
              href='mailto:sfwew19@gmail.com'
            >
              sfwew19@gmail.com
            </a>{" "}
            <br />
            Телефон:{" "}
            <a
              className='text-[#922bff]  hover:underline'
              href='tel:+380664939038'
            >
              +380664939038
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OfferAgreement;
