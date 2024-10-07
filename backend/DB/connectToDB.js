import mongoose from "mongoose";


const connectToDB = async () => {
    try {
        await   mongoose.connect(process.env.DB_URI)

        console.log('Conexion con base de datos exitosa');
        
    } catch (Error) {
        console.log('Error al conectar con la base de datos', Error.message);
        
    }
}

export default connectToDB