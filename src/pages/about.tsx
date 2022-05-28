import { NextPage } from "next";
import { useRouter } from "next/router";
import lang from "../../public/locale";
import MainLayout from "../layouts/main";

const AboutPage: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const i18 = locale === "es" ? lang.es : lang.en;
  return (
    <MainLayout>
      <div>
        <h1>{i18.about.title}</h1>
        <pre>{i18.about.description}</pre>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
