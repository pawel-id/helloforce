import { Connection, Org } from '@salesforce/core'
import 'dotenv/config'

const aliasOrUsername = process.env.ORG
const org = await Org.create({ aliasOrUsername })
await org.refreshAuth()
const conn = org.getConnection()
console.log(`connected ${conn.instanceUrl}`)

console.log(await conn.apex.get('/hello'))
console.log(await conn.apex.get('/hello?name=Pawel'))
