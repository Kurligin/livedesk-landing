// Демонстрационная публикация лендинга: реквизиты оператора заменены на
// условные значения. Перед реальным запуском подставить настоящие данные —
// все плейсхолдеры ({{TOKEN}}) в markdown-документах берутся отсюда.

export const LEGAL_CONFIG = {
  INDIVIDUAL_NAME: 'Имя Фамилия Отчество',
  INN: '000000000000',
  CONTACT_EMAIL: 'kurligindevelopment@gmail.com',
  CONTACT_PHONE: '',
  REGION: 'Россия',
  SITE_URL: 'https://example.com',
  COMPANY_FULL_NAME: 'Оператор Сервиса',
  EFFECTIVE_DATE: 'не указана',
  VERSION: '1.0.0'
}

export function applyPlaceholders(rawText) {
  return Object.entries(LEGAL_CONFIG).reduce(
    (acc, [key, value]) =>
      acc.replaceAll(`{{${key}}}`, value || `(не указано: ${key})`),
    rawText
  )
}
