import { register } from 'module'
import { MessageChannel } from 'node:worker_threads';

const { port1, port2, } = new MessageChannel()

register('./hook.mjs', import.meta.url, {
  data: { port: port2 },
  transferList: [port2]
})

port1.on('message', async ({ url }) => {
  console.log('importing url', url)
  const xports = await import(url).then(Object.keys)
  console.log('got xports', xports)
  port1.postMessage({ xports, url })
})

port1.unref()
port2.unref()
