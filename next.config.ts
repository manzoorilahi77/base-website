import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { NextConfig } from 'next'

// Pin the file-tracing root to this project. Without it Next walks up the directory
// tree, finds unrelated lockfiles in parent folders, and warns on every build.
const projectRoot = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: projectRoot,
}

export default nextConfig
