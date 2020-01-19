const surveyOptions = [
  {
    title: 'Тип карты лояльности',
    value: 'cardType',
    type: 'select',
    optionTitle: 'тип',
    options: ['Standard', 'Gold', 'Platinum', 'International']
  }, {
    title: 'Возраст респондента',
    value: 'age',
    type: 'range',
    optionTitle: 'диапазон'
  }, {
    title: 'Статус карты лояльности',
    value: 'cardStatus',
    type: 'select',
    optionTitle: 'статус',
    options: ['Активный', 'VIP-статус', 'Анонимный']
  }
]

export default surveyOptions
