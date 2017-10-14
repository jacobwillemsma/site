/**
 *
 * This script will extract the internationalization messages from all components
 * and package them in the transalation json files in the translations file.
 */
import fs from 'fs'
import glob from 'glob'
import { appLocales, translationDevMessages } from 'i18n'
import { transform, transformFileSync } from 'babel-core'


const FILES_TO_PARSE = [
  'shared/**/messages.js',
  'shared/validationMessages/**.js',
]

const filePaths = [].concat.apply([], FILES_TO_PARSE.map((pattern) => glob.sync(pattern)))

const filesData = filePaths.map((file) => fs.readFileSync(file, {}, (err) => {
  if (err) throw err
}))

const messagesData = [].concat.apply([], filesData.map((fileData) => {
  const rintlmg       = transform(fileData, { presets: [], plugins: ['babel-plugin-rintlmg'] })
  const reactIntl     = transform(rintlmg.code, { plugins: ['react-intl'] })
  const messagesData  = reactIntl.metadata['react-intl'].messages

  return messagesData
}))

const result = appLocales.map((locale) => {
  return {
    locale,
    messagesData: messagesData.map((messageData) => {
      const prevMessage = translationDevMessages[locale][messageData.id]
    
      let newMessageData = {
        id: messageData.id,
        defaultMessage: messageData.defaultMessage,
        message: prevMessage || ''
      }
     
      if (prevMessage) {
        delete newMessageData.defaultMessage
      }
     
      return newMessageData
    })
  }
})


Promise.all(result.map((item) => {
  return fs.writeFileSync(
    `shared/translations/${ item.locale }.json`,
    `${JSON.stringify(item.messagesData, null, 2)}\n`
  )
}))
  .then(() => {
    console.log('Success!');
  })
