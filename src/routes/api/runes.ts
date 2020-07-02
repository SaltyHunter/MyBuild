import { Router, Request, Response } from 'express'
import { error, success } from '../../core/helpers/response'
import { BAD_REQUEST, OK, CREATED } from '../../core/constants/api'
import Rune from '../../core/models/Rune'

const api = Router()

api.get('/:file_name', async (req: Request, res: Response) => {
  try {
    const { file_name } = req.params
    const rune = await Rune.findOne({ where: { file_name } })

    res.status(OK.status).send(rune?.src)
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.post('/', async (req: Request, res: Response) => {
  try {
    const { src, file_name } = req.body

    const runes = new Rune()

    //runes.id = +id
    runes.src = src
    runes.file_name = file_name
    await runes.save()
    res.status(CREATED.status).json(success(runes))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
