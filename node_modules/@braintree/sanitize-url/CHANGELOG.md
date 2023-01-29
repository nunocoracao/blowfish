# 6.0.0

**Breaking Changes**

- Decode HTML characters automatically that would result in an XSS vulnerability when rendering links via a server rendered HTML file

```js
// decodes to javacript:alert('XSS')
const vulnerableUrl =
  "&#0000106&#0000097&#0000118&#0000097&#0000115&#0000099&#0000114&#0000105&#0000112&#0000116&#0000058&#0000097&#0000108&#0000101&#0000114&#0000116&#0000040&#0000039&#0000088&#0000083&#0000083&#0000039&#0000041";

sanitizeUrl(vulnerableUrl); // 'about:blank'

const okUrl = "https://example.com/" + vulnerableUrl;

// since the javascript bit is in the path instead of the protocol
// this is successfully sanitized
sanitizeUrl(okUrl); // 'https://example.com/javascript:alert('XSS');
```

# 5.0.2

- Fix issue where certain invisible white space characters were not being sanitized (#35)

# 5.0.1

- Fix issue where certain safe characters were being filtered out (#31 thanks @akirchmyer)

# 5.0.0

_Breaking Changes_

- Sanitize vbscript urls (thanks @vicnicius)

# 4.1.1

- Fixup path to type declaration (closes #25)

# 4.1.0

- Add typescript types

# CHANGELOG

## 4.0.1

- Fix issue where urls with accented characters were incorrectly sanitized

## 4.0.0

_Breaking Changes_

- Protocol-less urls (ie: www.example.com) will be sanitised and passed on instead of sending out `about:blank` (Thanks @chawes13 #18)

## 3.1.0

- Trim whitespace from urls

## 3.0.0

_breaking changes_

- Replace blank strings with about:blank
- Replace null values with about:blank

## 2.1.0

- Allow relative urls to be sanitized

## 2.0.2

- Sanitize malicious URLs that begin with `\s`

## 2.0.1

- Sanitize malicious URLs that begin with %20

## 2.0.0

- sanitize data: urls

## 1.0.0

- sanitize javascript: urls
