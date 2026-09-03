import type { IncomingMessage, ServerResponse } from 'node:http'
import http from 'node:http'

http
	.createServer((req: IncomingMessage, res: ServerResponse) => {
		res.writeHead(200)
		res.end('Hello World! \nI am krasauchik! \n^_^')
	})
	.listen(8080)
