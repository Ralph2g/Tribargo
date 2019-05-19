export interface JwtResponseI {
    dataUser:{
        id: number,
        nombre: string,
        correo: string,
        accessToken: string,
        expiresIn: string
    }
}
