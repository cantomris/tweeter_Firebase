import VuexORM from '@vuex-orm/core'
import Kwarg from 'src/store/classes/Kwarg'
import User from 'src/store/classes/User'

const database = new VuexORM.Database()

database.register(Kwarg)
database.register(User)

export default database
