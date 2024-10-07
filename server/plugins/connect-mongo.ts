import { connect } from 'mongoose'

export default defineNitroPlugin(async () => {
  try {
    await connect(
      'mongodb+srv://tejop1997:4RqR3sr0mb79zkDc@cluster0.ttjllsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
  } catch (error) {
    console.log(error)
  }
})
