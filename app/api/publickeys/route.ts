export async function GET() {
  const body = `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPsKPXQ53fP82+PCzkAnsEnFl0kXiEZxeEy+OdP/1gkn iqmal@First-Fortress
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJAOFzQRcPvWjGfR6mCRP7dFYX0dBC2DLnfrQ91f2oxK fareez@Fareez-Macbook.local
`
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
