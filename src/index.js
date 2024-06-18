import connectToDatabase from './database/data.js'

async function Main() {
  console.log(process.env.USERDATABASE, process.env.PASSWWORDDATABASE)
  // await connectToDatabase('gu', '123')
}

Main()
