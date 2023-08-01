import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Radiant Organic Herring</title>
        <meta property="og:title" content="Radiant Organic Herring" />
      </Helmet>
      <a href="https://antonio.mafet.sa.com/" className="home-link">
        <img alt="image" src="/es_peru-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
