---
name: Bug Report
about: Error found
title: 'Api Error'
labels: 'bug, api'
assignees: 'Developer Name'

---

### Environment
URL: https://echo-serv.tbxnet.com/v1/qa/test2
Stage: qa 

### Link to screenshot or video
https://drive.google.com/file/d/1tIm23W8WgN50bpokP3hvz-E9feY3Rw1X/view?usp=sharing

### Logs
test2:1             
GET https://echo-serv.tbxnet.com/v1/qa/test2 500 (Internal Server Error)

### Network Requests
{
  "log": {
    "version": "1.2",
    "creator": {
      "name": "WebInspector",
      "version": "537.36"
    },
    "pages": [
      {
        "startedDateTime": "2025-11-20T22:30:52.072Z",
        "id": "page_5",
        "title": "https://echo-serv.tbxnet.com/v1/qa/test2",
        "pageTimings": {
          "onContentLoad": 481.67399992235005,
          "onLoad": 482.0680000120774
        }
      }
    ],
    "entries": [
      {
        "_connectionId": "287292",
        "_initiator": {
          "type": "other"
        },
        "_priority": "VeryHigh",
        "_resourceType": "document",
        "cache": {},
        "connection": "443",
        "pageref": "page_5",
        "request": {
          "method": "GET",
          "url": "https://echo-serv.tbxnet.com/v1/qa/test2",
          "httpVersion": "h3",
          "headers": [
            {
              "name": ":authority",
              "value": "echo-serv.tbxnet.com"
            },
            {
              "name": ":method",
              "value": "GET"
            },
            {
              "name": ":path",
              "value": "/v1/qa/test2"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": "accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
            },
            {
              "name": "accept-encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "accept-language",
              "value": "es-ES,es;q=0.9,en;q=0.8"
            },
            {
              "name": "cache-control",
              "value": "max-age=0"
            },
            {
              "name": "priority",
              "value": "u=0, i"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?0"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Windows\""
            },
            {
              "name": "sec-fetch-dest",
              "value": "document"
            },
            {
              "name": "sec-fetch-mode",
              "value": "navigate"
            },
            {
              "name": "sec-fetch-site",
              "value": "none"
            },
            {
              "name": "sec-fetch-user",
              "value": "?1"
            },
            {
              "name": "upgrade-insecure-requests",
              "value": "1"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 500,
          "statusText": "",
          "httpVersion": "h3",
          "headers": [
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "cf-ray",
              "value": "9a1b64f06d83dea5-EZE"
            },
            {
              "name": "content-length",
              "value": "77"
            },
            {
              "name": "content-type",
              "value": "application/json; charset=utf-8"
            },
            {
              "name": "date",
              "value": "Thu, 20 Nov 2025 22:30:52 GMT"
            },
            {
              "name": "etag",
              "value": "W/\"4d-rP/VxPlTsMqdF0IwCz5BFgoEQzI\""
            },
            {
              "name": "priority",
              "value": "u=0,i"
            },
            {
              "name": "server",
              "value": "cloudflare"
            },
            {
              "name": "server-timing",
              "value": "cfExtPri"
            },
            {
              "name": "vary",
              "value": "Origin, Accept-Encoding"
            }
          ],
          "cookies": [],
          "content": {
            "size": 77,
            "mimeType": "application/json",
            "text": "{\"code\":\"SYS-ERR\",\"message\":\"An Error\",\"details\":\"SYSTEM_ERROR\",\"status\":500}"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 330,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "104.18.11.69",
        "startedDateTime": "2025-11-20T22:30:52.069Z",
        "time": 382.50400003067404,
        "timings": {
          "blocked": 6.703000011786819,
          "dns": 11.367999999999999,
          "ssl": 33.175000000000004,
          "connect": 45.664,
          "send": 0,
          "wait": 317.10100000718234,
          "receive": 1.6680000117048621,
          "_blocked_queueing": 2.3560000117868185,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_fromCache": "disk",
        "_initiator": {
          "type": "other"
        },
        "_priority": "High",
        "_resourceType": "other",
        "cache": {},
        "connection": "443",
        "pageref": "page_5",
        "request": {
          "method": "GET",
          "url": "https://echo-serv.tbxnet.com/favicon.ico",
          "httpVersion": "h3",
          "headers": [
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Windows\""
            },
            {
              "name": "Referer",
              "value": "https://echo-serv.tbxnet.com/v1/qa/test2"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "",
          "httpVersion": "h3",
          "headers": [
            {
              "name": "cache-control",
              "value": "public, max-age=31536000"
            },
            {
              "name": "content-encoding",
              "value": "gzip"
            },
            {
              "name": "cf-cache-status",
              "value": "HIT"
            },
            {
              "name": "etag",
              "value": "W/\"47e-OQz2Lck2cjXiASei6hCRTAZxW1Q\""
            },
            {
              "name": "age",
              "value": "81618"
            },
            {
              "name": "cf-ray",
              "value": "9a1b269caaa1dea7-EZE"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "server-timing",
              "value": "cfExtPri"
            },
            {
              "name": "date",
              "value": "Thu, 20 Nov 2025 21:48:19 GMT"
            },
            {
              "name": "content-type",
              "value": "image/x-icon"
            },
            {
              "name": "vary",
              "value": "Origin, Accept-Encoding"
            },
            {
              "name": "server",
              "value": "cloudflare"
            },
            {
              "name": "priority",
              "value": "u=1,i"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1150,
            "mimeType": "image/x-icon",
            "text": "AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIg4RAiIOGPIiDh/yIg4f8iIOGPIiDhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIg4XAiIOHvIiDh/yIg4d8iIOHfIiDh/yIg4e8iIOFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiDhQCIg4d8iIOH/IiDh7yIg4XAiIOEQIiDhECIg4XAiIOHvIiDh/yIg4d8iIOFAAAAAAAAAAAAAAAAAIiDhnyIg4f8iIOH/IiDhjyIg4TAiIOG/IiDhgCIg4YAiIOG/IiDhMCIg4Y8iIOH/IiDh/yIg4Z8AAAAAIiDhQCIg4f8iIOHPIiDhMCIg4YAiIOH/IiDh/yIg4YAiIOGAIiDh/yIg4f8iIOGAIiDhMCIg4c8iIOH/IiDhQCIg4UAiIOH/IiDhUCIg4b8iIOH/IiDh/yIg4f8iIOGAIiDhgCIg4f8iIOH/IiDh/yIg4b8iIOFQIiDh/yIg4UAiIOFAIiDh/yIg4UAiIOG/IiDh/yIg4f8iIOH/IiDhgCIg4YAiIOH/IiDh/yIg4f8iIOG/IiDhQCIg4f8iIOFAIiDhQCIg4f8iIOFAIiDhvyIg4f8iIOH/IiDh/yIg4YAiIOGAIiDh/yIg4f8iIOH/IiDhvyIg4UAiIOH/IiDhQCIg4UAiIOH/IiDhQCIg4b8iIOH/IiDh7yIg4XBZWOlAIiDhQCIg4XAiIOHvIiDh/yIg4b8iIOFAIiDh/yIg4UAiIOFAIiDh/yIg4UAiIOG/IiDhjyIg4TAiIOGvIiDh/yIg4f8iIOGvIiDhMCIg4Y8iIOG/IiDhQCIg4f8iIOFAIiDhQCIg4f8iIOFQIiDhICIg4YAiIOH/IiDh/yIg4f8iIOH/IiDh/yIg4f8iIOGAIiDhICIg4VAiIOH/IiDhQCIg4UAiIOH/IiDhzyIg4TAiIOGAIiDh/yIg4f8iIOH/IiDh/yIg4f8iIOH/IiDhgCIg4TAzMePPIiDh/yIg4UAAAAAAIiDhnyIg4f8iIOH/IiDhjyIg4TAiIOG/IiDh/yIg4f8iIOG/IiDhMCIg4Y8iIOH/IiDh/yIg4Z8AAAAAAAAAAAAAAAAiIOFAIiDh3yIg4f8iIOHvIiDhcCIg4UAiIOFAIiDhcCIg4e8iIOH/IiDh3yIg4UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIOFwIiDh7yIg4f8iIOHfIiDh3yIg4f8iIOHvIiDhcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIg4RAiIOGPIiDh/yIg4f8iIOGPIiDhEAAAAAAAAAAAAAAAAAAAAAAAAAAA+B8AAPAPAADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAADwDwAA+B8AAA==",
            "encoding": "base64"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "104.18.10.69",
        "startedDateTime": "2025-11-20T22:30:52.558Z",
        "time": 2.9769999673590064,
        "timings": {
          "blocked": 1.8710000313296915,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.5550000478103757,
          "receive": 0.5509998882189393,
          "_blocked_queueing": 1.6400000313296914,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      }
    ]
  }
}

<paste output from network requests tab here>

### Browser Metadata
| Field      | Value                  |
|------------|------------------------|
| Browser    | Chrome                 |
| Version    | Version 142.0.7444.176 |
| Dimensions | 1920x1080              |
| ...        | ...                    |

### Device Metadata
| Field      | Value         |
|------------|---------------|
| Device     | Windows 10 PC |
| Dimensions | 1920x1080     |
| ...        | ...           |

### User Data
| Field      | Value                                 |
|------------|---------------------------------------|
| Id         | QA-Tester-01                          |
| Local Time | Thu Nov 20 2025 18:11:04 (GMT-0300)   |
| ...        | ...                                   |

### Custom Data
| Field      | Value         |
|------------|---------------|
| ...        | ...           |