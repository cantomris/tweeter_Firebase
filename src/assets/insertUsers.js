import User from 'src/store/classes/User'

export default async function insertUsers () {
  await User.insert({
    data:
    [
      {
        id: 1,
        first_name: 'Can',
        last_name: 'Tomris',
        email: 'cantomris@local.dev',
        password: '123456',
        avatar: 'https://i1.sndcdn.com/avatars-000038565479-7xzn0k-t500x500.jpg',
        posts: [
          {
            title: 'Awesome',
            time_stamp: 1619222519821,
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt.',
            image: {
              id: 12412,
              url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            }
          },
          {
            title: 'Extra ordinary',
            time_stamp: 1608157000000,
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt.'
          }
        ]
      },

      {
        id: 2,
        first_name: 'John',
        last_name: 'Tomers',
        email: 'tomerskiller@local.dev',
        password: '12345',
        avatar: 'https://i4.hurimg.com/i/hurriyet/75/0x0/600965400f25443f0406f3ab.jpg',
        age: 27,
        posts: [
          {
            title: 'Magnificent',
            time_stamp: 1209457573908,
            body: 'Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. '
          }
        ]
      },

      {
        id: 3,
        first_name: 'Osman',
        last_name: 'Lahmacuncu',
        email: 'lafmacuncu@local.dev',
        password: '12345',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZE1ImBAIlSMQ972BXc4lYsaU4GxyDp50XA&usqp=CAU',
        age: 34,
        posts: [
          {
            title: 'Exquisite',
            time_stamp: 1109456542908,
            body: 'Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. '
          }
        ]
      }
    ]
  })
}
