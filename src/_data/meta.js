export default function () {
  const me = {
    name: 'Darien Nichols-Higgins',
    email: 'hi@darienhiggins.com'
  }
  
  const meta = {
    lang: 'en',
    url: 'https://darienhiggins.com/',
    description: 'Personal website of Darien Nichols-Higgins',
    contact: {
      name: me.name,
      email: me.email
    },
    title: {
      base: me.name,
      separator: ' | '
    }
  }
  return {
    ...me,
    ...meta
  }
}