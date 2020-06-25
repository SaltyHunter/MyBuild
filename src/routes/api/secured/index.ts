import { Router } from 'express'
import users from './users'
import builds from './build'


const api = Router()

api.use('/users', users)
api.use('/users/:userId/build', builds)


export default api
