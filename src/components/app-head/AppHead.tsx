import Head from "next/head"

interface Props {}

const AppHead: React.FC<Props> = () => {

  return (
    <Head>
	    <meta http-equiv="x-ua-compatible" content="ie=edge" />
	<title>Improve your health using food &mdash; The Doctors Kitchen</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:title" content="Improve your health using food" />
    <meta name="author" content="Dr. Rupy Aujla" />
    <meta property="og:locale" content="en_US" />
    <meta name="description" content="Research backed recipes tailored to your personal needs. Expert knowledge and advice from qualified professionals." />
    <meta property="og:description" content="Research backed recipes tailored to your personal needs. Expert knowledge and advice from qualified professionals." />
    <link rel="canonical" href="https://thedoctorskitchen.com/" />
    <meta property="og:url" content="https://thedoctorskitchen.com/" />
    <meta property="og:site_name" content="The Doctors Kitchen" />
    <meta property="og:image" content="https://thedoctorskitchen.com/img/og.jpg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:image" content="https://thedoctorskitchen.com/img/og.jpg" />
    <meta property="twitter:title" content="Improve your health using food" />
    <meta name="twitter:site" content="@doctors_kitchen" />
    <meta name="twitter:creator" content="@doctors_kitchen" />
    </Head>
  )
}

export default AppHead