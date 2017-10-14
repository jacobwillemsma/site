import React from 'react'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Href from 'components/Href/Href'

const screeningIcon = (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 508.116 508.116" style={{ enableBackground: 'new 0 0 508.116 508.116' }}>
    <g>
      <g>
        <path strokeWidth="2" d="M42.4,154.333c-23.3,0-42.4,19-42.4,42.3v30.3c0,23.3,19,42.3,42.3,42.3s42.4-18.9,42.4-42.3v-30.3
          C84.7,173.333,65.7,154.333,42.4,154.333z M56.5,226.932c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1v-30.3
          c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V226.932z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M98.8,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,18.9,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3
          C141.1,19.132,122.1,0.132,98.8,0.132z M112.9,72.732c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3
          c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V72.732z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M14.1,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1c7.8,0,14.1-6.3,14.1-14.1v-86.7
          C28.2,6.432,21.9,0.132,14.1,0.132z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M268.1,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,19,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3
          C310.4,19.132,291.4,0.132,268.1,0.132z M282.2,72.732c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3
          c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V72.732z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M183.5,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c-0.1,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-86.7
          C197.6,6.432,191.3,0.132,183.5,0.132z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M437.4,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,19,42.3,42.3,42.3s42.3-19,42.3-42.3v-30.3
          C479.7,19.132,460.7,0.132,437.4,0.132z M451.5,72.732c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1v-30.3
          c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V72.732z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M352.8,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-86.7
          C366.9,6.432,360.6,0.132,352.8,0.132z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M98.8,304.532c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.3,19,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3
          C141.1,323.532,122.1,304.532,98.8,304.532z M112.9,377.132c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3
          c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V377.132z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M14.1,304.532c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1c7.8,0,14.1-6.3,14.1-14.1v-86.7
          C28.2,310.832,21.9,304.532,14.1,304.532z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M432.8,269.132C433.2,269.232,433.5,269.232,432.8,269.132L432.8,269.132z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M495.7,435.632l-28.7-28.4c7.9-7.7,12.8-18.4,12.8-30.1v-30.3c-1.2-21.3-15.7-43.2-46.1-42.1c1.3-11.7,0.9-23.6-0.9-35.6
          c-0.4,0-0.8-0.1,0-0.1c23.3,0,47-13.4,47-42.2v-30.3c0-23.3-19-42.3-42.3-42.3c-21.5,0-39.4,16.2-42,37
          c-26.4-28.4-64-46.2-105.7-46.2c-36.6,0-69.9,13.7-95.4,36.2c-6.2-15.8-21.5-27-39.4-27c-23.3,0-42.3,19-42.3,42.3v30.3
          c0,20.6,14.7,37.7,34.2,41.5c-1,7-1.8,14.1-1.8,21.4c0,79.8,64.9,144.7,144.7,144.7c24.5,0,47.6-6.2,67.9-17l78.1,78.1
          c15.5,16.3,44,16.9,59.9,0C512.8,478.532,511.7,451.632,495.7,435.632z M437.4,332.732c7.8,0,14.1,6.3,14.1,14.1v30.3
          c0,4-1.7,7.6-4.4,10.2l-23.8-23.8v-16.7C424.5,338.332,429,333.432,437.4,332.732z M423.3,196.632c0-7.8,6.3-14.1,14.1-14.1
          c7.8,0,14.1,6.3,14.1,14.1v30.3c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1V196.632z M169.1,210.132
          c-6.3,9.6-11.4,19.9-15.3,30.8h-0.1c-7.2-0.7-12.8-6.7-12.8-14v-30.3c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V210.132z
           M289.8,406.332c-64.3,0-116.5-52.1-116.5-116.5c0-64.3,52.1-116.5,116.5-116.5s116.5,52.1,116.5,116.5
          C406.2,354.232,354.1,406.332,289.8,406.332z M475.6,475.732c-5.3,5.3-14.6,5.3-19.9,0l-74.1-74.1c7.3-6,14-12.7,19.9-19.9
          l74.1,74.1C480.7,461.232,481.4,470.032,475.6,475.732z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M289.8,211.432c-7.8,0-14.1,6.3-14.1,14.1v73.3c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-73.3
          C303.9,217.833,297.6,211.432,289.8,211.432z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M289.8,331.932c-7.8,0-14.1,6.3-14.1,14.1v8.2c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-8.2
          C303.9,338.232,297.6,331.932,289.8,331.932z"/>
      </g>
    </g>
  </svg>
)

const accountIcon = (
  <svg
    version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	  viewBox="0 0 33 33" style={{ enableBackground: 'new 0 0 33 33' }} strokeWidth="2"
  >
    <g>
      <path d="M16.5,33C7.402,33,0,25.598,0,16.5S7.402,0,16.5,0S33,7.402,33,16.5S25.598,33,16.5,33z M16.5,1C7.953,1,1,7.953,1,16.5
        S7.953,32,16.5,32S32,25.047,32,16.5S25.047,1,16.5,1z"/>
      <path d="M16.5,33c-3.435,0-6.736-1.058-9.549-3.06c-0.15-0.107-0.23-0.29-0.206-0.473s0.148-0.339,0.322-0.403
        c4.146-1.535,4.815-2.781,4.815-5.169c0-0.631-0.142-0.838-0.398-1.214c-0.339-0.494-0.803-1.171-1.129-2.939
        c-0.048-0.254-0.089-0.274-0.316-0.384c-0.606-0.292-1.163-0.712-1.309-2.628c0-0.928,0.32-1.441,0.585-1.708
        c-0.058-0.33-0.153-0.899-0.242-1.519C8.62,10.726,8.6,7.325,12.506,5.744c3.404-1.38,6.121-0.626,6.974,0.273
        c0.604,0.019,2.162,0.177,3.246,1.438c1.668,1.94,1.137,6.363,0.955,7.562c0.266,0.261,0.589,0.767,0.589,1.675
        c-0.146,1.954-0.703,2.375-1.31,2.666c-0.228,0.11-0.269,0.129-0.316,0.384c-0.326,1.768-0.789,2.445-1.128,2.939
        c-0.257,0.375-0.398,0.583-0.398,1.214c0,2.388,0.669,3.634,4.815,5.169c0.174,0.064,0.298,0.219,0.322,0.403
        s-0.056,0.366-0.206,0.473C23.236,31.942,19.935,33,16.5,33z M8.317,29.651C10.779,31.191,13.589,32,16.5,32
        s5.721-0.809,8.183-2.349c-3.474-1.426-4.565-2.864-4.565-5.755c0-0.941,0.278-1.348,0.573-1.779
        c0.304-0.444,0.682-0.996,0.971-2.556c0.139-0.754,0.576-0.964,0.865-1.103c0.311-0.149,0.631-0.303,0.744-1.803
        c-0.001-0.764-0.344-0.972-0.358-0.98c-0.184-0.106-0.303-0.329-0.264-0.537c0.248-1.329,0.656-5.474-0.681-7.031
        c-0.913-1.062-2.352-1.091-2.626-1.08c-0.046-0.004-0.091-0.005-0.134-0.016c-0.13-0.033-0.35-0.146-0.417-0.262
        c-0.272-0.466-2.641-1.403-5.91-0.08c-3.231,1.308-3.238,4.112-2.819,6.682c0.138,0.957,0.289,1.784,0.29,1.788
        c0.041,0.225-0.076,0.449-0.283,0.544l0,0c0.003,0-0.339,0.209-0.339,1.008c0.112,1.461,0.433,1.616,0.743,1.765
        c0.289,0.139,0.727,0.349,0.866,1.103c0.288,1.56,0.666,2.112,0.97,2.556c0.296,0.431,0.574,0.838,0.574,1.779
        C12.883,26.788,11.792,28.226,8.317,29.651z"/>
    </g>
  </svg>
)

const badgeIcon = (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 507.9 507.9" style={{ enableBackground: 'new 0 0 507.9 507.9' }}>
    <g>
      <g>
        <path d="M459.599,81.5c-37.2,0-67.4-30.2-67.4-67.4c0-7.8-6.3-14.1-14.1-14.1h-248.2c-7.8,0-14.1,6.3-14.1,14.1
          c0,37.1-30.2,67.4-67.4,67.4c-7.8,0-14.1,6.3-14.1,14.1V195c0,137.5,86.3,262.9,214.6,312c3.4,1.2,6.7,1.2,10.1,0
          c128.4-49.2,214.6-174.6,214.6-312V95.6C473.699,87.8,467.399,81.5,459.599,81.5z M253.999,478.7c-49.8-20.1-92.4-52.9-124.7-93.6
          c12.5-58.8,63.9-100.8,124.8-100.8c60.8,0,112.2,42,124.7,100.8C346.499,425.8,303.799,458.6,253.999,478.7z M399.499,355.6
          c-22.7-59.2-79.5-99.6-145.4-99.6c-65.9,0-122.7,40.4-145.4,99.7c-21.7-34.8-36.4-74-42.7-115.2h17.7c7.8,0,14.1-6.3,14.1-14.1
          c0-7.8-6.3-14.1-14.1-14.1h-20.6c-0.3-5.7-0.5-11.5-0.5-17.2v-11h56.4c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-56.5
          v-47.2c41.4-6.2,74.3-39,80.4-80.4h222c6.2,41.4,39,74.3,80.4,80.4V195h0.2C445.499,252.8,428.799,308.2,399.499,355.6z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M253.999,72.7c-41.4,0-75,33.6-75,75c0,41.3,33.6,75,75,75c41.4,0,75-33.6,75-75C328.999,106.3,295.399,72.7,253.999,72.7
          z M253.999,194.5c-25.8,0-46.8-21-46.8-46.8c0-25.8,21-46.8,46.8-46.8s46.8,21,46.8,46.8
          C300.799,173.5,279.799,194.5,253.999,194.5z"/>
      </g>
    </g>
  </svg>
)

const shieldIcon = (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 507.925 507.925" style={{ enableBackground: 'new 0 0 507.925 507.925' }}>
    <g>
      <g>
        <path d="M325.262,363l-12.2-81.8c-1-6.9-7-12-14-12h-31.1v-71.8h28.5c7.8,0,14.1-6.3,14.1-14.1s-6.3-14.1-14.1-14.1h-28.5v-23.1
          h16.4c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-16.4V94.8h34.3c7.8,0,14.1-6.3,14.1-14.1s-6.3-14.1-14.1-14.1h-34.8
          c-1.5-6.2-7-10.7-13.7-10.7c-7.8,0-14.1,6.3-14.1,14.1v199.2h-31.1c-7,0-12.9,5.1-14,12l-12.1,81.8c-1.3,8.5,5.3,16.2,14,16.2
          h114.8C319.863,379.2,326.462,371.5,325.262,363z M212.862,351l8-53.6h66l8,53.6H212.862z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M445.362,76.5c-34.4,0-62.3-28-62.3-62.3c-0.1-7.9-6.4-14.2-14.2-14.2h-230c-7.8,0-14.1,6.3-14.1,14.1
          c0,34.4-28,62.3-62.3,62.3c-7.8,0-14.1,6.3-14.1,14.1v183.9c0,100.9,189.8,225.9,197.9,231.2c4.9,3.1,10.6,3.1,15.4,0
          c8.1-5.3,197.9-130.3,197.9-231.2V90.6C459.462,82.8,453.162,76.5,445.362,76.5z M431.262,274.5c0,67.8-121.4,164.4-177.4,202.5
          c-55.9-38-177.4-134.6-177.4-202.5V103.6c38.7-6.1,69.3-36.7,75.4-75.4h204c6.1,38.7,36.7,69.3,75.4,75.4V274.5z"/>
      </g>
    </g>
  </svg>
)


const nav = [
  { title: 'Account', icon: shieldIcon, to: links.abs.account },
  { title: 'Screening', icon: screeningIcon, to: links.abs.deals },
]

const Logo = (props) => (
  <div styleName="nav">
    {
      nav.map(({ title, icon, to }, index) => (
        <Href key={index} styleName="link" activeClassName={styles.active} to={to}>
          <div styleName="icon">{icon}</div>
        </Href>
      ))
    }
  </div>
)

export default cssModules(Logo, styles)
