import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import avatar from "assets/img/faces/persona3.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function PerfilUsuario() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/*<h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>*/}
              <h4 className={classes.cardTitle}>Carlos Correia</h4>
              <Button color="success">Seguidores</Button>
              <Button color="info">Seguindo</Button>
              <p className={classes.description}>
              <p>Campinas-SP</p>
              <p>23 anos</p>
              <p>Logo mais formado em Engenharia Química!!</p>
              </p>
              <Button color="rose" round>
                Seguir
              </Button>
            </CardBody>
          </Card>
        </GridItem>

      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}s>Eventos do usuário</h4>
            <p className={classes.cardCategoryWhite}>
              Principais eventos visitados
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Evento", "Data", "Cidade", "Quando"]}
              tableData={[
                ["Hackathon React", "08/04/2021", "Campinas", "Daqui a 2 dias"],
                ["Cervejada PUCC", "10/04/2021", "Campinas", "Daqui a 4 dias"],
                ["Guarani x Corinthians", "07/04/2021", "Campinas", "Amanhã"],
                ["Mostra de Carros Antigos", "10/04/2021", "Águas de Lindóia", "Daqui a 4 dias"],
                ["Festival 'Seus filhos com a Disney'", "12/04/2021", "São Paulo", "Daqui a 1 semana"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>


    </div>
  );
}
