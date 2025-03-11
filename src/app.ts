// interface User {
//     birthYear: number
// }

// function calculateAgeOfUser(user: User) {
//     return new Date().getFullYear() - user.birthYear
// }

// calculateAgeOfUser({
//     birthYear: 1994
// })

import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// https://localhost:3333/hello

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions'
})
