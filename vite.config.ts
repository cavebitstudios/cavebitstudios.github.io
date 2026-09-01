import fs from 'node:fs/promises'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { buildTrackedLinkDestination, trackedLinks } from './src/data/trackedLinks.ts'

function redirectHtml(destination: string) {
  const escapedDestination = destination.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  const scriptDestination = JSON.stringify(destination)

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${escapedDestination}">
  <title>CaveBit Studios</title>
</head>
<body>
  <script>window.location.replace(${scriptDestination})</script>
  <p><a href="${escapedDestination}">Continue to CaveBit Studios</a></p>
</body>
</html>
`
}

function trackedLinksPlugin(): Plugin {
  return {
    name: 'cavebit-tracked-links',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const requestUrl = new URL(request.url ?? '/', 'http://localhost')
        const slug = requestUrl.pathname.replace(/^\/+|\/+$/g, '') as keyof typeof trackedLinks
        const link = trackedLinks[slug]

        if (!link || requestUrl.pathname.includes('.', 1)) {
          next()
          return
        }

        response.statusCode = 302
        response.setHeader('Location', buildTrackedLinkDestination(link))
        response.end()
      })
    },
    async closeBundle() {
      const outputDirectory = path.resolve(process.cwd(), 'dist')

      await Promise.all(
        Object.entries(trackedLinks).map(async ([slug, link]) => {
          const linkDirectory = path.join(outputDirectory, slug)
          await fs.mkdir(linkDirectory, { recursive: true })
          await fs.writeFile(
            path.join(linkDirectory, 'index.html'),
            redirectHtml(buildTrackedLinkDestination(link)),
            'utf8',
          )
        }),
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), trackedLinksPlugin()],
})
