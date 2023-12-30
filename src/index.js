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

  program.command('categories')
  .description('Retrieve categories for Chuck Norris facts')
  .action(async (str, options) => {
    const categories = await (await fetch(process.env.API_URL.concat('categories'))).json()
    console.log('\nHere are the categories for Chuck Norris facts:\n\n')
    categories.forEach(category =>
      console.log(category)
    )
  })

program.parse()