import "@/styles/globals.css";
import Layout from "../layout/Layout";
import RecipesContext from "@/contexts/RecipesContext";

export default function App({ Component, pageProps }) {
  return (
    <RecipesContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecipesContext>
  );
}
