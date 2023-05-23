import { Grid, IconButton, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { LeftBar } from "src/components/common/left-bar";
import { NavigationItem } from "src/types/left-bar";
import { UnloggedLayout } from "src/components/common/unlogged-layout";
import { useSelector } from "src/store";
import { BackwardButton } from "src/components/common";

const Terminos: NextPage = () => {
  const { isMobile } = useSelector((state) => state.mobile);
  const navigationList: NavigationItem[] = [
    {
      icon: "bar_chart",
      text: "INTRODUCCIÓN",
      to: "terminos#introduccion",
    },
    {
      icon: "bar_chart",
      text: "ASPECTOS GENERALES",
      to: "terminos#generales",
    },
    {
      icon: "bar_chart",
      text: "ASPECTOS PARTICULARES",
      to: "terminos#particulares",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {!isMobile && (
        <Grid item xs={12} sm={12} md={3} lg={3} container>
          <LeftBar navigationList={navigationList} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">
            {isMobile && <BackwardButton />}
            Términos y condiciones
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Última actualización: 07/12/2022</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Aspectos generales</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">
            Estos TyC regularán la navegación dentro del sitio web la cpm.la (en
            adelante `&quot;`EL SITIO`&quot;` o `&quot;`LA PLATAFORMA`&quot;`) y sus subdominios. Los
            productos o servicios que se adquieran a través de la LA PLATAFORMA
            se regirán por contratos especiales. AL HACER CLIC EN `&quot;` ACEPTO`&quot;`,
            ACCEDER O UTILIZAR NUESTROS SERVICIOS (COMO SE DEFINE EN ESTOS TyC),
            USTED ACE´TA ESTOS TyC EN SU TOTALIDAD, Y OTROS TÉRMINOS
            INCORPORADOS POR REFERENCIA
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">
            En caso de no encontrarse de acuerdo con las presentes TyC,
            solicitamos se abstenga de utilizar los servicios ofrecidos en la
            PLATAFORMA
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Modificación de los TYC</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">
            Los presentes Términos y Condiciones pdrán ser sustituidos o sufir
            modificaciones en cualquier momento a exclusivo criterio de LA
            EMPRESA, sin necesidad de consteimiento de los Usuarios. Para las
            transacciones en curso que hayan comenzado con anterioridad a la
            implementación de dicas modificaciones, subsistirán las condiciones
            vigentes al momento de su concertación, a menos que las
            modificaciones introducidas resulten más convenientes para el
            Usuario.-
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">
            Como única y válida notificación, LA EMPRESA enviará un correo
            electrónico al Usuario y/o notificar a través de LA PLATAFORMA sobre
            estos cambios, durante un tiempo razonable. Sin perjuicio de la
            anterior, los Usuarios son responsables de ller estos TyC cada vez
            que ingresen LA PLATAFORMA a fin de verificar la vigencia de los
            mismo y/o si se han producido modificaciones
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
Terminos.getLayout = (page) => (
  <UnloggedLayout head="Términos y Condiciones | CPM">{page}</UnloggedLayout>
);

export default Terminos;
