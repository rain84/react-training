import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

type Entry = {
  name: string
  path: string
  stat: any
}

export const fileDirName = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return { __dirname, __filename }
}

// TODO: extract into separate 'vite-resolve-alias-plugin'
export const resolveAlias = async () => {
  const { __dirname } = fileDirName()
  const src = path.resolve(__dirname, './src')
  const entries = await fs.readdir(src)
  const folders = (
    await Promise.all(
      entries.map((name) => {
        const p = path.resolve(src, name)
        return new Promise<Entry>(async (res, rej) => {
          try {
            res({
              name,
              path: p,
              stat: await fs.stat(p),
            })
          } catch (error) {
            rej(error)
          }
        })
      })
    )
  )
    .filter(({ stat }) => stat.isDirectory())
    .map(({ name, path }) => [name, path])

  const alias = Object.fromEntries(folders)
  return { alias }
}
