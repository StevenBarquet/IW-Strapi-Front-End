// Dependencies
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";
import PropTypes from "prop-types";

// loader component
import PageChange from "~/components/PageChange/PageChange";

// context
import { SettingsProvider } from "~/context/Settings";

// Styles
import "~/assets/scss/nextjs-material-kit-pro.scss?v=1.1.0";
import "animate.css/animate.min.css";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const comment = document.createComment(`
      IIIIIIIIII                         tttt                                              WWWWWWWW                           WWWWWWWW
      I::::::::I                      ttt:::t                                              W::::::W                           W::::::W
      I::::::::I                      t:::::t                                              W::::::W                           W::::::W
      II::::::II                      t:::::t                                              W::::::W                           W::::::W
        I::::Innnn  nnnnnnnn    ttttttt:::::ttttttt        eeeeeeeeeeee    rrrrr   rrrrrrrrrW:::::W           WWWWW           W:::::Waaaaaaaaaaaaa  rrrrr   rrrrrrrrr       eeeeeeeeeeee
        I::::In:::nn::::::::nn  t:::::::::::::::::t      ee::::::::::::ee  r::::rrr:::::::::rW:::::W         W:::::W         W:::::W a::::::::::::a r::::rrr:::::::::r    ee::::::::::::ee
        I::::In::::::::::::::nn t:::::::::::::::::t     e::::::eeeee:::::eer:::::::::::::::::rW:::::W       W:::::::W       W:::::W  aaaaaaaaa:::::ar:::::::::::::::::r  e::::::eeeee:::::ee
        I::::Inn:::::::::::::::ntttttt:::::::tttttt    e::::::e     e:::::err::::::rrrrr::::::rW:::::W     W:::::::::W     W:::::W            a::::arr::::::rrrrr::::::re::::::e     e:::::e
        I::::I  n:::::nnnn:::::n      t:::::t          e:::::::eeeee::::::e r:::::r     r:::::r W:::::W   W:::::W:::::W   W:::::W      aaaaaaa:::::a r:::::r     r:::::re:::::::eeeee::::::e
        I::::I  n::::n    n::::n      t:::::t          e:::::::::::::::::e  r:::::r     rrrrrrr  W:::::W W:::::W W:::::W W:::::W     aa::::::::::::a r:::::r     rrrrrrre:::::::::::::::::e
        I::::I  n::::n    n::::n      t:::::t          e::::::eeeeeeeeeee   r:::::r               W:::::W:::::W   W:::::W:::::W     a::::aaaa::::::a r:::::r            e::::::eeeeeeeeeee
        I::::I  n::::n    n::::n      t:::::t    tttttte:::::::e            r:::::r                W:::::::::W     W:::::::::W     a::::a    a:::::a r:::::r            e:::::::e
      II::::::IIn::::n    n::::n      t::::::tttt:::::te::::::::e           r:::::r                 W:::::::W       W:::::::W      a::::a    a:::::a r:::::r            e::::::::e
      I::::::::In::::n    n::::n      tt::::::::::::::t e::::::::eeeeeeee   r:::::r                  W:::::W         W:::::W       a:::::aaaa::::::a r:::::r             e::::::::eeeeeeee
      I::::::::In::::n    n::::n        tt:::::::::::tt  ee:::::::::::::e   r:::::r                   W:::W           W:::W         a::::::::::aa:::ar:::::r              ee:::::::::::::e
      IIIIIIIIIInnnnnn    nnnnnn          ttttttttttt      eeeeeeeeeeeeee   rrrrrrr                    WWW             WWW           aaaaaaaaaa  aaaarrrrrrr                eeeeeeeeeeeeee

      ¡Apasionados por la tecnología!
    `);
    document.insertBefore(comment, document.documentElement);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>InterWare de México - Soluciones tecnológicas</title>
      </Head>
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </>
  );
};

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialApolloState: PropTypes.shape({}),
  }).isRequired,
};

export default App;
