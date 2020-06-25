import { Router, Request, Response } from 'express'
import { isEmpty } from 'lodash'

import Build from '@/core/models/Build'
import { error, success } from '@/core/helpers/response'
import { BAD_REQUEST, CREATED, OK } from '@/core/constants/api'
import User from '@/core/models/User'

const api = Router({ mergeParams: true })

api.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const position = await Build.findOne({ where: { uuid_user : id } })

    res.status(CREATED.status).json(success(position))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.post('/', async (req: Request, res: Response) => {
  const fields = ['id_champ','item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'sum1', 'sum2', 'rp1', 'rp2', 'rp3', 'rp4', 'rs1', 'rs2', 'rt1', 'rt2', 'rt3', 'commentaire']

  try {
    const missings = fields.filter((field: string) => !req.body[field])

    if (!isEmpty(missings)) {
      const isPlural = missings.length > 1
      throw new Error(`Field${isPlural ? 's' : ''} [ ${missings.join(', ')} ] ${isPlural ? 'are' : 'is'} missing`)
    }

    const { userId } = req.params
    const user = await User.findOne({ where: { id: userId } })

    if (!user) {
      throw new Error(`User ${userId} doens't exist`)
    }

    const { id_champ, item1, item2, item3, item4, item5, item6, sum1, sum2, rp1, rp2, rp3, rp4, rs1, rs2, rt1, rt2, rt3, commentaire } = req.body

    const build = new Build()

    build.user = user
    build.id_champ = id_champ
    build.item1 = item1
    build.item2 = item2
    build.item3 = item3
    build.item4 = item4
    build.item5 = item5
    build.item6 = item6
    build.sum1 = sum1
    build.sum2 = sum2
    build.rp1 = rp1
    build.rp2 = rp2
    build.rp3 = rp3
    build.rp4 = rp4
    build.rs1 = rs1
    build.rs2 = rs2
    build.rt1 = rt1
    build.rt2 = rt2
    build.rt3 = rt3
    build.commentaire = commentaire

    await build.save()

    res.status(CREATED.status).json(success(build))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.put('/:id', async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const { id_champ, item1, item2, item3, item4, item5, item6, sum1, sum2, rp1, rp2, rp3, rp4, rs1, rs2, rt1, rt2, rt3, commentaire } = req.body

    await Build.update({ uuid_creator: id } , { id_champ: id_champ });
    await Build.update({ uuid_creator: id } , { item1: item1 });
    await Build.update({ uuid_creator: id } , { item2: item2 });
    await Build.update({ uuid_creator: id } , { item3: item3 });
    await Build.update({ uuid_creator: id } , { item4: item4 }); 
    await Build.update({ uuid_creator: id } , { item5: item5 });
    await Build.update({ uuid_creator: id } , { item6: item6 });
    await Build.update({ uuid_creator: id } , { sum1: sum1 });
    await Build.update({ uuid_creator: id } , { sum2: sum2 });
    await Build.update({ uuid_creator: id } , { rp1: rp1 });
    await Build.update({ uuid_creator: id } , { rp2: rp2 });
    await Build.update({ uuid_creator: id } , { rp3: rp3 });
    await Build.update({ uuid_creator: id } , { rp4: rp4 });
    await Build.update({ uuid_creator: id } , { rs1: rs1 });
    await Build.update({ uuid_creator: id } , { rs2: rs2 });
    await Build.update({ uuid_creator: id } , { rt1: rt1 });
    await Build.update({ uuid_creator: id } , { rt2: rt2 });
    await Build.update({ uuid_creator: id } , { rt3: rt3 });
    await Build.update({ uuid_creator: id } , { commentaire: commentaire });

    const build = await Build.findOne({ where: { uuid_user : id } })

    res.status(OK.status).json(success(build))
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

api.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    //const position = await User.findOne({ where: { id: id } })

    await Build.delete({ uuid_creator: id })

    res.status(OK.status).json({"delete":"OK"})
  } catch (err) {
    res.status(BAD_REQUEST.status).json(error(BAD_REQUEST, err))
  }
})

export default api
