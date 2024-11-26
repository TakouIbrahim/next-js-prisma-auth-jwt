'use server';
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../prisma'
import { NextRequest, NextResponse } from 'next/server'
import { createSession, deleteSession } from '@/app/auth/02-stateless-session';

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Méthode non autorisée' }, {status: 405})
  }

  const json = await request.json();
  const email = json.email;
  const password = json.password;

  // Vérifier si l'utilisateur existe
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return NextResponse.json({ message: 'Utilisateur introuvable' }, {status: 400})
  }

  // Vérifier le mot de passe
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Mot de passe incorrect' }, {status: 401})
  }

  // 4. Create a session for the user
  const userId = user.id.toString();
  await createSession(userId);

  return NextResponse.json({ message: 'utilisateur créer avec succès' }, {status: 200})
}

export async function logout() {
  deleteSession();
}