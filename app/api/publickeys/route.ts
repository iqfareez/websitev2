import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://api.github.com/users/iqfareez/keys')
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch keys' }, { status: 500 })
  }
  const data = await res.json()
  // data is an array of objects with a 'key' property
  const keys = data.map((item: { key: string }) => item.key)
  const body = keys.join('\n')
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
