import React from 'react'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './HomePage.scss'

import Href from 'components/Href/Href'

import logoImage from './images/logo.png'


const HomePage = () => (
  <div styleName="container">
    <div styleName="content">
      <img styleName="logo" src={logoImage} />
      <div styleName="features">
        <div styleName="feature">
          <div styleName="featureTitle">Audit platform for smart contracts</div>
          <div styleName="featureDesc">A p2p platform to review smart contracts, where anyone can bring their contract for a comprehensive quality review by other blockchain developers.</div>
        </div>
        <div styleName="feature">
          <div styleName="featureTitle">The contractor only pays for bugs that are found</div>
          <div styleName="featureDesc">We will never again have a situation where someone pays money, the audit provider says there aren’t any bugs, but you wonder if that is really true</div>
        </div>
        <div styleName="feature">
          <div styleName="featureTitle">The reviewers get an opportunity to work and earn money</div>
          <div styleName="featureDesc">Contractors offer bug bounties that are payable upon discovery of defects</div>
        </div>
        <div styleName="feature">
          <div styleName="featureTitle">No trust required</div>
          <div styleName="featureDesc">All logics include on smart contracts, and no one can change it!</div>
        </div>
      </div>
      <Href styleName="button" to={links.abs.screenings}>Try in now</Href>
    </div>
  </div>
)

export default cssModules(HomePage, styles)
