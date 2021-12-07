<p align="center">
<img src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" width="210" alt="The School of Code logo" />
</p>

<h1 align="center">
School of Code Mentoring
</h1>

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
  - [Development](#development)
- [Tools](#tools)
- [Ways of working](#ways-of-working)
  - [Ngrok](#ngrok)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

### Development

```bash
npm install
npm run dev
```

## Tools

| Tool       | Description            |
| ---------- | ---------------------- |
| Prettier   | Consistent code format |
| Husky      | Git hooks              |
| LintStaged | Only lint staged files |

## Ways of working

- Create a VSCode LiveShare session
- Create & share [Ngrok](https://ngrok.com/) URL

### Ngrok

Ngrok allows for easy sharing of localhost on a public url to enable easy collaboration

```bash
ngrok http -host-header=localhost 8080
```
