import fastify from "fastify";
import { request } from "http";

const app = fastify({logger: true})

app.get('/', async(request, reply)=>{
    return{message: 'Yay!'}
})

const start = async() =>{
    try {
        await app.listen(3000)
        console.log('Server up and running')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
start()