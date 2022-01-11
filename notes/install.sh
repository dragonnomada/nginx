#!/bin/bash

sudo ./configure \
  --prefix=/nginx \
  --with-http_mp4_module \
  --with-http_flv_module

sudo make

sudo make install

echo "Se ha instalado nginx correctamente en /nginx"