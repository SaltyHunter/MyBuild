import { Router, Request, Response } from 'express'
import { error, success } from '../../../core/helpers/response'
import { BAD_REQUEST, OK } from '../../../core/constants/api'
import User from '../../../core/models/User'
import bcrypt from 'bcryptjs'


const api = Router()

api.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const user = await User.findOne({ where: { id } })

    res.status(OK.status).json(success(user))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.put('/:id', async (req: Request, res: Response) => {
  try {

    const { id } = req.params
    const { firstname, lastname, username, password, passwordConfirmation, mail } = req.body

    if (password !== passwordConfirmation) {
      throw new Error("Password doesn't match")
    }

    const pw = bcrypt.hashSync(password)
    
    await User.update({ id: id } , { firstname: firstname })
    await User.update({ id: id } , { lastname: lastname })
    await User.update({ id: id } , { username: username })
    await User.update({ id: id } , { password: pw })
    await User.update({ id: id } , { mail: mail })

    const user = await User.findOne({ where: { id : id } })

    res.status(OK.status).json(success(user))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
