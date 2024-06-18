async function connectToDatabase(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log('Connecting to database')
  } else {
    console.log('Failed to connect to database')
  }
}

export default connectToDatabase
