import type { NextPage } from "next";
import lang from "../../public/locale";
import { useRouter } from "next/router";
import MainLayout from "../layouts/main";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const i18 = locale === "es" ? lang.es : lang.en;
  return (
    <MainLayout>
      <div>
        <h1>{i18.home.title}</h1>
        <pre>{i18.home.description}</pre>
      </div>
    </MainLayout>
  );
};

export default Home;
