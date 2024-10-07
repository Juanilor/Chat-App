export const signup = async (req, res) => {
    try {
        res.send('Funcionando desde el componente sign up')


    } catch (Error) {
        console.log('Error en componente signup', Error.message)

        res.status(500).json({Error: 'Error interno de servidor'})
    }
}