import Api from '@/services/Api'

export default {
  getAllSurveys () {
    return Api().get('survey/surveys')
  },
  addSurvey (survey) {
    return Api().post('survey/create', survey)
  }
}
