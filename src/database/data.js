async function connectToDatabase(user, password) {
  if (user === 'gu' && password === '123') {
    console.log('Connecting to database')
  } else {
    console.log('Failed to connect to database')
  }
}

async function Main() {
  await connectToDatabase('gu', '123')
}

export default connectToDatabase;