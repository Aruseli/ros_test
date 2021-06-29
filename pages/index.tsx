import Head from 'next/head'
import { Timer } from '../imports/components/timer';
import { HeaderLogoTimer } from '../imports/components/header';
import { Space } from '../imports/components/space';
import { DataUser } from '../imports/components/registration-form';
import { CompaniesPosition } from '../imports/components/companies-position';
import { Button, makeStyles, Divider } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { build } from '../imports/theme';
import { TypeMember } from '../imports/components/type-member';
import { Contacts } from '../imports/components/contacts';
import { Text } from '../imports/components/text';
import { Footer } from '../imports/components/footer';


const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',    
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    
  },
  main: {
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 980,
    background: '#fff',
  }
}))

export default function Home() {
  const classes = useStyles();
  return (<ThemeProvider theme={build}>
      <div className={classes.container}>
        <Head>
          <title>Регистрация на семинар</title>
          <meta name="description" content="Регистрация на семинар" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={classes.main}>
          <HeaderLogoTimer />
          <Timer />
          <Space unit={2} />
          <form noValidate onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
          }}>
            <DataUser />
            <Space unit={2} />
            <CompaniesPosition />
            <Space unit={2} />
            <TypeMember />
            <Space unit={2} />
            <Contacts />
            <Space unit={2} />
            <Text />
            <Space unit={2} />
            <Divider />
            <Footer />
            <Space unit={1} />
            <Button type="submit" variant='outlined' style={{float: 'right'}}>Отправить заявку</Button>
          </form>
          
        </main>  
      </div>
    </ThemeProvider>
  )
}
