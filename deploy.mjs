import { spawnSync } from 'node:child_process'
import 'dotenv/config'

const { ORG } = process.env
let command = `sf project deploy start`
if (ORG) {
  command += ` --target-org ${ORG}`
} else {
  console.warn('Warning: no $ORG env variable present')
}
console.error(`$ ${command}`)
spawnSync(command, { shell: true, stdio: 'inherit' })
