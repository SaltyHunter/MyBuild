import { Router, Request, Response, json } from 'express'
import { isEmpty } from 'lodash'

import Build from '@/core/models/Build'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, OK } from '@/core/constants/api'
import User from '@/core/models/User'

const api = Router({ mergeParams: true })

api.get('/:id', async (req: Request, res: Response) => {
    try {
        // const { uuid } = req.params
        const { id } = req.params
        const builds = await Build.find({ where: { id_champ: id } })
        const build = await Build.findOne({ where: { id_champ: id } })
        res.status(OK.status).json(success(build))
        } catch (err) {
        res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
        }
  })

  export default api
