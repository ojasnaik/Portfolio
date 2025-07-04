import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 })
    }

    const isValid = await bcrypt.compare(password, await bcrypt.hash(ADMIN_PASSWORD, 10))
    
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = jwt.sign({ authenticated: true }, JWT_SECRET, { expiresIn: '1h' })

    const response = NextResponse.json({ success: true })
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 })
  }
}