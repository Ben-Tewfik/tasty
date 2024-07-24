import "@/styles/globals.css";
import Layout from "./Layout";
import RecipesContext from "@/context/recipesContext";

export default function App({ Component, pageProps }) {
  return (
    <RecipesContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecipesContext>
  );
}
