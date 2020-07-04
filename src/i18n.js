import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Fetch from 'i18next-fetch-backend'

i18n
	.use(Fetch)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		ns: ['common', 'translation'],
		defaultNS: 'common',
		preload: ['en'],
		backend: {
			loadPath: 'http://localhost:4000/static/locales/{{lng}}/{{ns}}.json',
			addPath: 'http://localhost:4000/static/locales/{{lng}}/{{ns}}',
			init: {
				mode: 'no-cors',
				credentials: 'include',
				cache: 'default',
			},
		},
		resources: {
			en: {
				common: {
					'home.title': 'Front',
				},
			},
		},
		debug: true,
		lng: 'en',
		interpolation: {
			escapeValue: false,
		},
		keySeparator: false,
		initImmediate: false,
		nsSeparator: false,
	})

export default i18n
