import { useSelector } from "react-redux";
import { Layout } from "../layouts/Layout";
import { selectRandomCategory } from "../store/selectors";
import { CategoryBlock } from "../components/CategoryBlock";
import { FormBlock } from "../components/FormBlock";
import { Banner } from "../components/Banner/Banner";
import { Sales } from "../components/Sales";

export const Home = () => {
  const randomCategories = useSelector(selectRandomCategory);

  useSelector((state) => {
    console.log(state);
  });

  return (
    <Layout>
      <Banner />
      <CategoryBlock categories={randomCategories} />
      <FormBlock /> <Sales />
    </Layout>
  );
};
