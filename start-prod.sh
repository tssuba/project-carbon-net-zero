echo "

░█▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ █▀▀▄ 　 ░█▄─░█ █▀▀ ▀▀█▀▀ ── ░█▀▀▀█ █▀▀ █▀▀█ █▀▀█ 　 ░█▀▀█ █▀▀█ ─▀─ █▀▄▀█ █▀▀ █▀▀█ 
░█─── █▄▄█ █▄▄▀ █▀▀▄ █──█ █──█ 　 ░█░█░█ █▀▀ ──█── ▀▀ ─▄▄▄▀▀ █▀▀ █▄▄▀ █──█ 　 ░█▄▄█ █▄▄▀ ▀█▀ █─▀─█ █▀▀ █▄▄▀ 
░█▄▄█ ▀──▀ ▀─▀▀ ▀▀▀─ ▀▀▀▀ ▀──▀ 　 ░█──▀█ ▀▀▀ ──▀── ── ░█▄▄▄█ ▀▀▀ ▀─▀▀ ▀▀▀▀ 　 ░█─── ▀─▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀─▀▀

"
# current time.
now=$(date +"%T")

echo "Starting Deployment...."
echo "
Current time : $now

"


docker-compose -f docker-compose.prod.yml up -d

