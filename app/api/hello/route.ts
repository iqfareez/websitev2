import { NextResponse } from 'next/server'

// This is being used from example in the gist https://gist.github.com/iqfareez/4861c6e5dc76c1190d8b1651def13d37
export async function GET() {
  const data = {
    message: 'Hello from iqfareez! For indeed, with hardship [will be] ease.',
  }
  return NextResponse.json(data, { status: 200 })
}
