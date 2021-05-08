import Post from 'src/store/classes/Post'

export default () => {
  Post.insert({
    data: {
      id: 1,
      title: 'Awesome',
      time_stamp: 1619457519821,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt.'
    }
  })

  Post.insert({
    data: {
      id: 2,
      title: 'Magnificent',
      time_stamp: 1619457573908,
      body: 'Dignissimos ex ratione enim quo illo perspiciatis sunt vitae delectus voluptates error, aliquid, placeat alias nam aliquam sed recusandae deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    }
  })
}
