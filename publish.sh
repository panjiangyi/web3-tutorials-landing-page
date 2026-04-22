#!/bin/bash

set -e

cd "$(dirname "$0")"

echo "Pulling latest code..."
git pull

echo "Building..."
npm run build

echo "Restarting Next.js service..."
pkill -f "next-server" || true
sleep 1
PORT=3001 nohup npm start > /tmp/nextjs.log 2>&1 &

echo "Done! Website should be live at https://mogician.me"