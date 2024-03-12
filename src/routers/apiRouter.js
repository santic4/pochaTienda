import { Router } from 'express'
import { errorHandler } from '../middlewares/errorHandler.js'
import { metodosPersonalizados } from '../middlewares/respuestasMejoradas.js'
import { usersRouter } from './usersRouter.js'
import { sessionRouter } from './sessionRouter.js'
import { carritoRouter } from './carritoRouter.js'
import { productsRouter } from './productsRouter.js'

export const apiRouter = Router()

apiRouter.use(metodosPersonalizados)


// END POINTS
apiRouter.use('/users', usersRouter)
apiRouter.use('/session', sessionRouter)
apiRouter.use('/carts', carritoRouter)
apiRouter.use('/products', productsRouter)


// MIDDLEWARES
apiRouter.use(errorHandler)