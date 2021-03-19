import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import gatsbyLogo from '../../assets/images/Gatsby_Logo.webp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QR from '../../assets/images/artbachmann.eu.png';
import CafeteriaGatsbyFrontpage from '../../assets/images/cafeteria_gatsby_thumbnail.webp';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
      marginTop: '2em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.4em',
      paddingRight: '1.4em',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em',
    },
  },
  rowContainer: {
    paddingLeft: '10vw',
    paddingRight: '10vw',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  background: {
    backgroundColor: '#f2f7f5',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em',
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },

  // revolutionCard: {
  //   width: '30vw',
  //   [theme.breakpoints.down("sm")]: {
  //     width: '50vw',
  //   }
  // },

  // TIIVISTELMA HEADING1

  heading1: {
    ...theme.typography.h1,
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginTop: '2.6em',
      marginBottom: '1em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.2rem',
      marginTop: '2.6em',
      marginBottom: '1em',
      paddingLeft: '2.3em',
      paddingRight: '2.3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      marginTop: '2.6em',
      fontSize: '1.9rem',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      fontSize: '1.5rem',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },

    // 0 upt to 600
    fontFamily: 'Open Sans Condensed',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.2em',
      fontSize: '1.4rem',
      marginBottom: '1em',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },
  },

  // TIIVISTELMA HEADING2

  heading2: {
    // larger than 1920
    ...theme.typography.h2,
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
      marginTop: '2em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.4em',
      paddingRight: '1.4em',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em',
    },
  },

  // TIIVISTELMA TEXT
  text: {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '1em',
    fontFamily: 'Open Sans Condensed',
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#443f3f',

    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.4rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginBottom: '0.4em',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
      paddingLeft: '0.2em',
      paddingRight: '0.2em',
      marginBottom: '0.4em',
    },
  },

  link: {
    color: '#45a3b2',
    textDecoration: 'underline',
    '&:hover': {
      color: 'purple',
    },
    firstSentence: {
      fontSize: '1.6em',
      fontWeight: 600,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid container direction="column" className={classes.background}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '8em' : matchesSM ? '2em' : '14em' }}
      >
        <Typography
          align={matchesMD ? 'center' : undefined}
          style={{
            marginLeft: matchesMD ? undefined : '3em',
            maxWidth: matchesMD ? undefined : '70vw',
          }}
          className={classes.heading1}
          variant="h1"
        >
          GatsbyJS kotisivut ja mobiilisovellukset. Sivuston helppoudella ja
          suorituskyvyllä on valtava vaikutus myyntiin ja asiakkaiden
          sitoutumiseen.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Gatsby on kehys nykyaikaisten verkkosivujen ja sovellusten
          rakentamiseen. Se voi siirtää tietoja sivustolle mistä tahansa
          sisällönhallintajärjestelmästä
          {/*   <Link
            style={{ marginTop: '2em' }}
            href="/ratkaisut/headlessCMS"
            className={classes.link}
            onClick={preventDefault}>&nbsp;
            sisällönhallintajärjestelmästä
            &nbsp;</Link> */}
          &nbsp;tai muista tällä hetkellä käyttämistäsi lähteistä. Yritykset
          jotka ovat siirtäneet sivustonsa Gatsby:n alustalle, ovat kokeneet
          merkittävää nousua liideissä, Googlen orgaanisen haun liikenteessä ja
          turvallisuudessa.
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={gatsbyLogo}
            alt="Gatsby logo"
            style={{ maxHeight: matchesMD ? 260 : '32em', marginTop: '8em' }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: '4em', marginBottom: '10em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify="space-between"
      >
        <Grid item container md justify="center">
          <Card
            style={{
              height: '36em',
              marginTop: matchesMD ? undefined : '14em',
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item container justify="center" alignItems="center">
                  <Grid item>
                    <img
                      alt="qr logo"
                      src={QR}
                      style={{
                        width: matchesSM ? '8em' : '10em',
                        marginTop: '0.6em',
                      }}
                    />
                  </Grid>

                  <Link to={'https://www.artbachmann.eu/'}>
                    <Grid item>
                      <img
                        className={classes.transform}
                        alt="headless wordpress front page"
                        src={CafeteriaGatsbyFrontpage}
                        style={{ width: matchesSM ? '8em' : '10em' }}
                      />
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>

            <CardContent>
              <Grid
                item
                justify="center"
                style={{ marginTop: '1em', marginBottom: '2em' }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  // className={classes.text}
                  style={{ width: matchesSM ? '16em' : '20em' }}
                >
                  Skannaa QR-koodi tai napsauta kuvaa ja koe itse
                  poikkeuksellisen hyvä suorituskysy useammasta laadukkaasta
                  valokuvasta huolimatta. Gatsby:n käyttäminen kotisivujen
                  kehittämisessä on loistava tapa lisätä sivustojen tehokkuutta,
                  skaalautuvuutta ja turvallisuutta. Älä tilaa verkkosivua joka
                  käyttää edellisen vuosikymmenen tekniikkaa. Gatsby:n avulla
                  rakennetaan mahdollisimman tehokas verkkosivusto.
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* Text columg */}
        <Grid item md>
          <Grid
            item
            container
            direction="column"
            md
            style={{
              maxWidth: matchesMD ? '77vw' : '40vw',
              marginLeft: matchesMD ? undefined : '4em',
            }}
          >
            {/* Heading */}
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="h3"
                className={classes.heading2}
                gutterBottom
              >
                Perustietoa GatsbyJS:stä
              </Typography>
            </Grid>

            {/* Block of texts */}
            <Grid item container>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                className={classes.text}
                paragraph
                style={{ fontWeight: 600, fontStyle: 'italic' }}
              >
                Gatsby on React-pohjainen kehys tehokkaiden verkkosivujen ja
                sovellusten rakentamiseen. Gatsby-sivustoilla on hämmästyttävä
                suorituskyky, tavallista parempi tietoturva ja parhaat
                verkkokäytännöt.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                className={classes.text}
                paragraph
              >
                <span style={{ fontWeight: 600, marginLeft: '1em' }}>
                  Tehokkaampi liidien luominen ja asiakkaiden sitoutuminen.{' '}
                </span>
                Sivuston toimivuudella ja suorituskyvyllä on valtava vaikutus
                myyntiin ja asiakkaiden sitoutumiseen. Äskettäinen&nbsp;{' '}
                <span>
                  <Link
                    className={classes.link}
                    to="https://blogs.akamai.com/2020/09/metrics-that-matter-continuous-performance-optimization.html"
                  >
                    Akamai-tutkimus
                  </Link>
                </span>
                &nbsp; osoitti, että 100 millisekunnin viive sivuston
                latausajassa laskee tulosprosentteja jopa seitsemällä
                prosentilla ja jopa 53% mobiilikäyttäjistä luovuttaa sivujen
                suhteen joilla kestää lataamisessa yli 3 sekunttia. Gatsby
                -sivustot ovat 2-3 kertaa nopeampia kuin eri työkaluilla
                rakennetut sivustot. Sivustojen omistajat ovat huomanneet myös
                liidien määrän kasvaneen jopa 60% Gatsbyyn vaihtamisen jälkeen.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                className={classes.text}
                paragraph
              >
                <span style={{ fontWeight: 600, marginLeft: '1em' }}>
                  Parannettu hakuliikenne.{' '}
                </span>
                &nbsp;
                <br />
                Sivuston tehokkuus on yksi vaikuttavimmista tekijöistä Googlen
                hakusijoitusalgoritmissa. Hitaalla sivustolla voi olla
                negatiivinen lumipallovaikutus hakukoneoptimointiin. Google siis
                indeksoi hitaita sivustoja kauemmin, eli niiden välitön
                poistumisprosentti on suurempi ja alhaisemmat tulosprosentit
                laskevat sijoitustasi. Gatsby -sivustoissa on automaattinen
                suorituskyvyn optimointi. Gatsby hakee parhailla
                sisällönhallinta- ja verkkokauppatyökaluilla tietoja
                käyttämistäsi sekä muista tietokannoista.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                className={classes.text}
                paragraph
              >
                <span style={{ fontWeight: 600, marginLeft: '1em' }}>
                  Turvallisuus
                </span>
                &nbsp;
                <br />
                Gatsby on staattisia HTML-sivuja tuottava sivustogeneraattori.
                Tämä tarkoittaa sitä, että et tarvitse julkisilla palvelimilla
                toimivaa tietokantaa tai sisällönhallintajärjestelmää, joissa on
                useimmiten uhka tietoturvaloukkaukseen. Staattista sisältöä on
                paljon helpompi suojata. Tämä ei kuitenkaan poista kaikkia
                Gatsby -sivustojen tietoturva-aukkoja, mutta vähentää niitä
                merkittävästi.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
