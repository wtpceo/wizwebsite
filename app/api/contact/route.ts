import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json()

    // 이메일 전송을 위한 transporter 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // 관리자에게 보내는 이메일
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: '새로운 문의가 접수되었습니다',
      html: `
        <h2>새로운 문의</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>문의내용:</strong></p>
        <p>${message}</p>
      `,
    }

    // 문의자에게 보내는 자동 응답 이메일
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '문의가 접수되었습니다',
      html: `
        <h2>문의 접수 확인</h2>
        <p>${name}님, 문의해 주셔서 감사합니다.</p>
        <p>빠른 시일 내에 답변 드리도록 하겠습니다.</p>
        <br/>
        <p>문의하신 내용:</p>
        <p>${message}</p>
      `,
    }

    // 이메일 전송
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('문의 처리 중 오류 발생:', error)
    return NextResponse.json(
      { error: '문의 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 