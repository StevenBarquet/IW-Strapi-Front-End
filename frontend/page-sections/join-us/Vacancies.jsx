// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "context/Settings";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Badge from "components/Badge/Badge";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CustomSelect from "components/CustomSelect/Select";
import Pagination from "components/Pagination/Pagination";

// gql
import { JOIN_US_VACANCIES_QUERY } from "gql/queries/join-us";

import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const Vacancies = ({ pageVacant, setPageVacant, multipleValue, setMultipleValue }) => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const start = pageVacant === 1 ? 0 : (pageVacant - 1) * 4;

  const { loading, error, data } = useQuery(JOIN_US_VACANCIES_QUERY, {
    variables: {
      where: multipleValue ? { tags: { id_in: multipleValue } } : {},
      limit: 4,
      start,
      sort: "created_at:desc",
    },
  });
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

  if (!data.vacancies) {
    return <span>¡Revisar CMS!</span>;
  }

  const { vacancies } = data;

  const tags = [
    { value: "1", label: "Agosto" },
    { value: "2", label: "Desarrollo Full Stack" },
    { value: "3", label: "Octubre" },
  ];

  const lastpage = Math.ceil(data.vacanciesCount / 4);

  return (
    <div id="section-vacancies" className={classes.section}>
      <GridContainer
        item
        xs={12}
        sm={11}
        md={9}
        className={`${classes.mlAuto}  ${classes.mrAuto} ${classes.displayNone}`}
      >
        <GridItem xs={12} sm={11} md={6}>
          {/* Tags:{" "}
          {tags.map((tag) => (
            <Badge key={tag.id} color="primary">
              <span>{tag.name}</span>
            </Badge>
          ))} */}
          <CustomSelect
            multiple
            id="tags"
            name="tags"
            label="Tags"
            noOptionText="Seleccione los tags"
            value={multipleValue}
            handleChange={e => setMultipleValue(e.target.value)}
            options={tags}
          />
        </GridItem>
        <GridItem xs={12} sm={11} md={6}>
          <p className={classes.lengthVacantText}>
            {language !== "_en" ? "Vacantes publicadas " : "Posted vacancies "}
            {data.vacanciesCount}
          </p>
        </GridItem>
        <GridItem xs={12} sm={11} md={12}>
          <div className={classes.dividerTags} />
        </GridItem>
      </GridContainer>
      <GridContainer
        item
        xs={12}
        sm={12}
        md={9}
        className={`${classes.mlAuto} ${classes.mrAuto}`}
      >
        {vacancies.map((item) => {
          return (
            <GridItem xs={12} sm={6} md={6} key={item.id}>
              <Card>
                <CardBody>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.floatRight}>
                      {item.tags.map((tag) => (
                        <Badge key={tag.id} color="primary">
                          <span>{tag[`name${language}`]}</span>
                        </Badge>
                      ))}
                    </div>
                    <br />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.titleVacante}>
                      {item[`title${language}`]}
                    </h3>
                    <hr className={classes.dividerGray} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <p>
                      <strong>{language !== "_en" ? "Edad: " : "Age: "}</strong>
                      {item[`age${language}`]}
                    </p>
                    <p>
                      <strong>
                        {language !== "_en" ? "Sexo: " : "Gender: "}
                      </strong>
                      {item[`gender${language}`]}
                    </p>
                    <p className={classes.mlText}>
                      <strong>
                        {language !== "_en" ? "Escolaridad: " : "Scholarship: "}
                      </strong>
                      <br />
                      {item[`scholarship${language}`]}
                    </p>
                    <p className={classes.mbText}>
                      <strong>
                        {language !== "_en"
                          ? "Zona de trabajo: "
                          : "Work zone: "}
                      </strong>
                      <br />
                      <span className={classes.boldText}>
                        {item[`workZone${language}`]}
                      </span>
                    </p>
                    <p>
                      <strong>
                        {language !== "_en"
                          ? "Requisitos Específicos: "
                          : "Specific requirements:: "}
                      </strong>
                    </p>
                    <RenderHTML
                      html={item[`specificRequirements${language}`]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={7}>
                    <div className={classes.dividerSmall} />
                    <p className={classes.contactText}>
                      {language !== "_en" ? "Contacto: " : "Contact: "}
                      {item.contact}
                    </p>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <div className={classes.floatRight}>
            <Pagination
              pages={[
                {
                  text: "Previous",
                  onClick: () => setPageVacant(pageVacant - 1),
                  disabled: pageVacant <= 1,
                },
                {
                  text: "Next",
                  onClick: () => setPageVacant(pageVacant + 1),
                  disabled: pageVacant >= lastpage,
                },
              ]}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Vacancies;
