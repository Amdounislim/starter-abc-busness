import { fetchSeo } from "@/actions/fetchSeo";
import "./custom.scss";
import { fetchPage } from "@/actions/fetchPage";
import HeroSection from "@/components/commons/HeroSection";
import CarrouselSection from "@/components/commons/CarrouselSection";
import CarouselCard from "@/components/commons/CarouselCard";
import SplitScreenSection from "@/components/commons/SplitScreenSection";

import OpenSideBarButton from "@/components/commons/Buttons/OpenSideBarButton";
import Separator from "@/components/commons/Separator";
import OpenModalButton from "@/components/commons/Buttons/OpenModalButton";
import ImageBackgroundSection from "@/components/commons/ImageBackgroundSection";
import AbcIntroImages from "@/components/commons/AbcIntroImages";
import TitleDescriptionWithImages from "@/components/commons/TitleDescriptionWithImages";
import VisitezEspaces from "@/components/commons/VisitezEspaces";

const pageName = "Page d'acceuil";

// export async function generateMetadata({}, parent) {
//   const seo = await fetchSeo(pageName);

//   const ogImage = `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${seo.attributes.ogimage.data.attributes.url}`;
//   const previousImages = (await parent).openGraph?.images || [];
//   return {
//     title: seo.attributes.title,
//     description: seo.attributes.description,
//     openGraph: {
//       images: [ogImage, ...previousImages],
//     },
//   };
// }
export default async function Home() {
  const sections = await fetchPage(pageName);
  // console.log(sections);

  return (
    <main className="">
      <HeroSection
        image_url={"/hero_home.webp"}
        title="Votre espace"
        subtitle1="professionnelle"
        subtitle2="à Monaco"
        titleClass="f100 text-white bold"
        subtitleClass="f60 text-white"
        description="Rejoignez ABC Business Center bureaux prêts à l'emploi, coworking et services premium pour développer votre entreprise dès aujourd'hui"
      />

      <AbcIntroImages />
      <TitleDescriptionWithImages
        title={
          <p>ABC Business Center Votre partenaire en Principauté de Monaco</p>
        }
        titleColor="text-orange"
        description="ABC Business Center est un centre d’affaires situé en plein cœur de Monaco,
dans le quartier dynamique de la Condamine, à deux pas de la gare, du port et de Fontvieille.
Il propose des solutions flexibles pour accompagner le bon fonctionnement de toute entreprise, en vous permettant de vous concentrer sur le développement de votre activité pendant..."
        buttonText="DÉCOUVRIR LE CENTRE"
        images={[
          {
            src: "/ABC_center_1.webp",
            alt: "ABC_center_1",
            width: 320,
            height: 275,
          },
          // {
          //   src: "/ABC_center_2.webp",
          //   alt: "ABC_center_2",
          //   width: 250,
          //   height: 250,
          // },
          {
            src: "/ABC_center_3.webp",
            alt: "ABC_center_3",
            width: 320,
            height: 275,
          },
          // {
          //   src: "/ABC_center_4.webp",
          //   alt: "ABC_center_4",
          //   width: 250,
          //   height: 250,
          // },
          // {
          //   src: "/ABC_center_5.webp",
          //   alt: "ABC_center_5",
          //   width: 250,
          //   height: 250,
          // },
        ]}
        gapImages="130px"
        background="linear-gradient(
          45deg,
          #FF6F0059 0%,
          #ffffff 25%,
          #ffffff 100%,
          #FF6F0059 100%
        )"
      />

      <TitleDescriptionWithImages
        title={<p>NOS BUREAUX EXCLUSIFS AVEC ENTRÉE PRIVATIVE</p>}
        titleColor="text-orange"
        description="Les bureaux privatifs d’ABC Business Center sont des espaces de travail individuels et entièrement meublés, conçus pour répondre aux besoins des entrepreneurs et des sociétés souhaitant une présence professionnelle en Principauté de Monaco."
        buttonText="DÉCOUVRIR NOS SERVICES"
        images={[
          {
            src: "/ABC_center_6.webp",
            alt: "ABC_center_6",
            width: 354,
            height: 390,
          },
          {
            src: "/ABC_center_7.webp",
            alt: "ABC_center_7",
            width: 354,
            height: 255,
          },
          {
            src: "/ABC_center_8.webp",
            alt: "ABC_center_8",
            width: 540,
            height: 390,
          },
        ]}
        gapImages="50px"
        background="linear-gradient(
          135deg,
          #FF6F0059 0%,
          #ffffff 25%,
          #ffffff 100%,
          #FF6F0059 100%
        )"
      />

      <VisitezEspaces
        title="VISITEZ NOS ESPACES ET DÉCOUVREZ UN COWORKING CONÇU POUR VOUS"
        description="ABC Business Center propose des solutions flexibles pour toutes les entreprises : bureaux individuels entièrement équipés, formules Start-Up pour lancer votre activité, et formules Primo pour les activités en nom personnel."
        images={[
          { id: 1, src: "/Nos_espace_1.webp", alt: "Espace 1" },
          { id: 2, src: "/Nos_espace_2.webp", alt: "Espace 2" },
          { id: 3, src: "/Nos_espace_3.webp", alt: "Espace 3" },
          { id: 4, src: "/Nos_espace_4.webp", alt: "Espace 4" },
          { id: 5, src: "/Nos_espace_5.webp", alt: "Espace 5" },
        ]}
        buttonText="DÉCOUVRIR NOS OFFRES"
        buttonLink="#"
        onButtonClick
      />

      <CarrouselSection
        rewind={true}
        width="100%"
        perPage={1}
        arrowPosition="middle"
        perMove={1}
        gap={0}
        svgNext={"/icons/nextCarouselArrow.svg"}
        svgPrev={"/icons/prevCarouselArrow.svg"}
        cards={[
          {
            title: "Confiance",
            description:
              "Un centre d’affaires qui simplifie durablement votre quotidien professionnel à Monaco grâce à une combinaison unique d’emplacement stratégique, de services sur mesure et d’espaces lumineux, vous permettant de vous concentrer entièrement sur le développement et la réussite de votre activité.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_1.webp",
            centerImage: "/formule_3.webp",
            paddingImageCenterTop: "20px",
            paddingImageCenterBottom: "10px",
          },
          {
            title: "Confort",
            description:
              "Un centre d’affaires qui simplifie durablement votre quotidien professionnel à Monaco grâce à une combinaison unique d’emplacement stratégique, de services sur mesure et d’espaces lumineux, vous permettant de vous concentrer entièrement sur le développement et la réussite de votre activité.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_2.webp",
            centerImage: "/formule_7.webp",
            paddingImageCenterTop: "20px",
            paddingImageCenterBottom: "10px",
          },
          {
            title: "efficacité",
            description:
              "Un centre d’affaires qui simplifie durablement votre quotidien professionnel à Monaco grâce à une combinaison unique d’emplacement stratégique, de services sur mesure et d’espaces lumineux, vous permettant de vous concentrer entièrement sur le développement et la réussite de votre activité.",
            buttonText: "NOUS CONTACTER",
            imageSrc: "/carousel_image_3.webp",
            centerImage: "/formule_9.webp",
            paddingImageCenterTop: "20px",
            paddingImageCenterBottom: "10px",
          },
        ].map((card, index) => (
          <CarouselCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            imageSrc={card.imageSrc}
            paddingTitle={card.paddingTitle}
            centerImage={card.centerImage}
            paddingImageCenterTop={card.paddingImageCenterTop}
            paddingImageCenterBottom={card.paddingImageCenterBottom}
          />
        ))}
      />

      {/* <div className="w65 m-auto wm100">
        <section className=" my-5  flexRowCenter border m-auto">
          <CarrouselSection
            arrowsContainerClassName={"flexRowCenter gap-5 mt-4"}
            rewind={true}
            width="100%"
            arrowClassName="arrow"
            perPage={3}
            arrowPosition="bottom"
            perMove={1}
            svgNext={"./icons/nextCarouselArrow.svg"}
            svgPrev={"./icons/prevCarouselArrow.svg"}
            cards={[{}, {}, {}, {}, {}, {}, {}].map((el, index) => (
              <CarouselCard key={index} index={index}></CarouselCard>
            ))}
          ></CarrouselSection>
        </section>
        <Separator height={20} />
        <section className="mt-5">
          <SplitScreenSection
            image_url={
              "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title="Lorem Ipsum"
            titleClass="bold f20"
            subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,"
            subtitleClass="f12 my-1 bold"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"
            descriptionClass="lorem"
            content="simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
            contentClass="my-3 f10 bold"
            buttonText="bouton"
            callBack={console.log("first")}
          />
        </section>
        <div>
          <OpenModalButton text={"ouvrir modal"} />
        </div>
        <div>
          <OpenSideBarButton text={"ouvrir side bar"} />
        </div>
        <div className="">
          <ImageBackgroundSection
            image_url={
              "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title="Lorem Ipsum"
            titleClass="bold f20"
            subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,"
            subtitleClass="f12 my-1 bold text-white"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"
            descriptionClass="lorem text-white"
            content="simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
            contentClass="my-3 f10 bold"
            buttonText="bouton"
          />
        </div>
      </div> */}
    </main>
  );
}
