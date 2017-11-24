# webpack-dev-server

for reproducing issue

`IOS device Failed to load resource: Could not connect to the server`

* Operating System: OSX
* Node Version: 8.4.0
* NPM Version: 5.3.0
* charles: 4.1.4

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

## device and system infomation

* iPhone 6 plus, system: ios 8.1.2
* iPhone 6s plus, system: ios 10
* iPhone 7, system: ios 11

PC and android devices works fine. 

## steps

1. open charles, start nginx
2. set your mobile device wifi proxy: <Your PC ip>:8888 
3. open your mobile browser, access http://www.domain1.com/srilanka

    
