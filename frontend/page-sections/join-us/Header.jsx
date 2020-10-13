// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "~/context/Settings";

// components
import Parallax from "~/components/Parallax/Parallax";
import RenderHTML from "~/components/HTML/RenderHTML";

// gql
import { JOIN_US_HEADER_QUERY } from "~/gql/queries/join-us";

import joinUsStyle from "~/assets/jss/joinUsStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(joinUsStyle);

const Header = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(JOIN_US_HEADER_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.joinUs) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    joinUs: { header },
  } = data;

  return (
    <header id="header">
      <Parallax image={`${apiUrl}${header.image.url}`} small>
        <div className={classes.captionContainer}>
          <RenderHTML
            html={header[`title${language}`]}
            className={classes.textOverlay}
          />
        </div>
      </Parallax>
    </header>
  );
};

export default Header;
