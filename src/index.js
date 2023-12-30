import { Command } from 'commander'
import 'dotenv/config'

console.log(`API_URL: ${ process.env.API_URL }`)

const program = new Command()
program.command('random')
  .description('Retrieve a random fact about Chuck Norris')
  .action(async (str, options) => {
    const fact = await (await fetch(process.env.API_URL.concat('random'))).json()
    console.log('\nHere is a random Chuck Norris fact:\n\n', fact.value.trim())
  })

program.parse()