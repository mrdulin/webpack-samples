# webpack-dev-server

for reproducing issue

`IOS device Failed to load resource: Could not connect to the server`

* Operating System: OSX
* Node Version: 8.4.0
* NPM Version: 5.3.0

## nginx config

```nginx
server {
    listen 80;
    server_name  www.domain1.com;
    error_page 500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    location /srilanka/ {
        proxy_pass http://localhost:3000/;
    }
}
```

## hosts

```txt
127.0.0.1 www.domain1.com
```

## device infomation

* device: iPhone 6 plus
* system: 8.1.2

* device: iPhone 6s plus
* system: 10

* device: iPhone 7
* system: 11

