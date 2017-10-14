import React from 'react'
import notify from 'components/NotificationSystem/NotificationSystem'

import Fragrance from 'components/NotificationTemplates/Fragrance/Fragrance'


const templates = {
  /**
   *
   * @param props {object}
   * @param props.item {object}
   */
  perfumeItem: (props) => <Fragrance {...props} />,
}

const show = (tplName, props) =>
  notify({
    content: templates[tplName](props),
  })


export default {
  show,
}
