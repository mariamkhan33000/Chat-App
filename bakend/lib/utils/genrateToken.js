import jwt from 'jsonwebtoken'


export const genrateTokenAndCookies = (userId, res) => {
    
    const token = jwt.sign({userId}, process.env.SECRET_KEY, {expiresIn: '20d'})

    res.cookie('jwt', token, {
        httpOnly : true,
        secure: true,
        semeSite: "strict"
    })
}