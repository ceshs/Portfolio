# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Copia arquivos para a pasta padrão do nginx
COPY index.html /usr/share/nginx/html/index.html
COPY DDOS.jpg /usr/share/nginx/html/DDOS.jpg

# Copia config personalizada do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80
EXPOSE 80
