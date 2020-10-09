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
import { ROBOT_HEADER_QUERY } from "~/gql/queries/robot";

import robotStyles from "~/assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const Header = () => {
  const { loading, error, data } = useQuery(ROBOT_HEADER_QUERY);
  const classes = useStyles();
  const {
    defaultSettings: { language },
  } = useSettings();

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.robot.header) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    robot: { header },
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
