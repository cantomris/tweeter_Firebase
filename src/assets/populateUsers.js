import User from 'src/store/classes/User'

export default async function populateUsers () {
  await User.insert({
    data: [
      {
        first_name: 'Can',
        last_name: 'Tomris',
        avatar: 'https://i1.sndcdn.com/avatars-000038565479-7xzn0k-t500x500.jpg',
        email: 'cantomris@local.dev',
        password: '123456'
      }
    ]
  })
}
