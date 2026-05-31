#!/usr/bin/env python3
"""Server statico per «La mia fede» con header no-cache.
Evita che il browser mostri versioni vecchie (cache) durante lo sviluppo.
Uso: python3 serve.py [porta]   (default 8000)
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    ThreadingHTTPServer.allow_reuse_address = True
    with ThreadingHTTPServer(("", port), NoCacheHandler) as httpd:
        print(f"La mia fede — server no-cache su http://localhost:{port}")
        httpd.serve_forever()
