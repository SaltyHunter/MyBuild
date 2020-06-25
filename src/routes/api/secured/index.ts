import { Router } from 'express'
import users from './users'
import builds from './build'
import buildBys from './buildBy'

const api = Router()

api.use('/users/', users)
api.use('/users/:userId/build', builds)
api.use('/users/:userId/buildByChamp', buildBys)

export default api
