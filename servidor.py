#!/usr/bin/env python3
import http.server
import socketserver
import socket

PORT = 9018

Handler = http.server.SimpleHTTPRequestHandler

# Permitir acceso desde cualquier interfaz de red
with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    # Obtener la IP local
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    
    print(f"Servidor web corriendo en:")
    print(f"  - Local: http://localhost:{PORT}")
    print(f"  - Red:   http://{local_ip}:{PORT}")
    print("Presiona Ctrl+C para detener")
    httpd.serve_forever()
