import { Router } from 'express'
import data from '../../data.json'

const router = Router()

enum responseAction {
  ERROR = 0,
  EXTRA_TIME = 1,
  NORMAL = 2
}

router.get('', async (_req, res) => {
  try {
    const random: number = Math.floor(Math.random() * 3)

    if (random === responseAction.ERROR) {
      throw new Error()
    }

    if (random === responseAction.EXTRA_TIME) {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return res.json(data)
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ message: 'Error in invocation of API: /characters' })
  }
})

router.get('/:characterId', (req, res) => {
  try {
    const { characterId } = req.params
    const character: any = data.results.find((c) => c.id === Number(characterId))

    if (!character) {
      throw new Error()
    }

    return res.status(200).json(character)
  } catch (error) {
    return res.status(500).json({ message: 'Error in invocation of API: /characters/characterId' })
  }
})

export default router
