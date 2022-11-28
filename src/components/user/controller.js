import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

// el real crud de usuarios con jsonwebtoken

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.json({ message: error })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.json({ message: error })
    }
}

export const crearUsuario = async (req, res) => {
    // desestructuramos el body masna
    const { nombre, correo, password, confPassword } = req.body
    // validamos que el password y confPassword sean igualitos
    if (password !== confPassword) return res.status(400).json({ message: 'Las contraseñas no coinciden mi king' })
    // validamos que el correo no exista
    const user = await prisma.user.findUnique({ where: { correo } })

    // si el correo existe osea el usuario existe!
    if (user) return res.status(400).json({ message: 'El correo ya existe mi king' })
    // ahora si causa vamos a encriptar el password con bcrypt
    const salt = await bcrypt.genSalt(10)
    const passEncriptado = await bcrypt.hash(password, salt)
    // ahora si a crear el usuario
    try {
        await prisma.user.create({
            data: {
                nombre,
                correo,
                password: passEncriptado
            }
        })
        res.status(201).json({ message: 'Usuario creado ciorrectamente mi king' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const loginUsuario = async (req, res) => {
    try {
        // validare si el correo existe
        const user = await prisma.user.findUnique({ where: { correo: req.body.correo } })
        // si el correo es decir el usuario no existe pues no existe :v
        if (!user) return res.status(400).json({ message: 'El usuario no existe, como el amor de ella' })
        // si el usuario existe toca validar elñ password
        // solo validamos desecriptando el password de la db y el password del req
        const passValido = await bcrypt.compare(req.body.password, user.password)
        if (!passValido) return res.status(400).json({ message: 'Contraseña incorrecta causa' })
        const userId = user.id
        const nombre = user.nombre
        const correo = user.correo
        // creamos el rico token
        const token = jwt.sign({
            userId,
            nombre,
            correo
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
        res.status(200).json({ token })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}