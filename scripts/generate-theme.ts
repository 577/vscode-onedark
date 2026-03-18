import { join } from 'path'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'
import * as flatConfig from '../src/flatConfig.json'
import * as darkerConfig from '../src/darkerConfig.json'
import * as mixConfig from '../src/mixConfig.json'
import * as nightFlatConfig from '../src/nightFlatConfig.json'
import { promises as fs } from 'fs'

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2))
}

async function main() {
  writeFile(
    join(__dirname, '..', 'themes', 'One-Dark-Pro.json'),
    await Theme.init({ editorTheme: 'One Dark Pro', vivid: false }),
  )
  writeFile(
    join(__dirname, '..', 'themes', 'One-Light-Pro.json'),
    await Theme.init({ editorTheme: 'One Light Pro', vivid: true }),
  )
}
main()
