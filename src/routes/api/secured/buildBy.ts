import { Router, Request, Response } from 'express'
import Build from '@/core/models/Build'
import { error } from '@/core/helpers/response'
import { BAD_REQUEST, OK } from '@/core/constants/api'

const api = Router({ mergeParams: true })

api.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const build = await Build.find({ where: { id_champ: id } })
    res.status(OK.status).json(build)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
