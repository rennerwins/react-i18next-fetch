import React from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
	const { t, i18n } = useTranslation()

	const handleSwitch = () => {
		i18n.changeLanguage('th')
	}

	return (
		<div>
			{t('home.title')} <button onClick={handleSwitch}>Switch</button>
		</div>
	)
}

export default App
