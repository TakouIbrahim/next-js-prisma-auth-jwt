
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Méthode non autorisée' }, {status: 405})
  }

  const json = await request.json();
  const email = json.email;
  const password = json.password;
  const name = json.name;

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return NextResponse.json({ message: 'Utilisateur déjà existant' }, {status: 400})
  }

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10)

  // Créer un nouvel utilisateur
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })

  return NextResponse.json({ message: 'Utilisateur créé avec succès' }, {status: 201})
}

// export async function POST(request: NextRequest) {
//   const json = await request.json();
//   // const data = {
//   //   email :json.get("email"),
//   //   password : json.get("password"),
//   //   name : json.get("name")
//   // }
//    console.log(json.email);
//   //  console.log(data);
//   return NextResponse.status(200).json({
//      json
//   })
// }