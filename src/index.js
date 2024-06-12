import connectToDatabase from './database/data.js'

async function Main() {
  await connectToDatabase('gu', '123')
}

Main()
