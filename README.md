# Simple TS Project with Jest configured

To manually create this project you just need to do the following

```bash
mkdir my-project
cd my-project
npm init -y
npm install typescript jest ts-jest @types/jest --save-dev
npx tsc --init
npx ts-jest config:init
```

Then you need to add the following to your `package.json` file

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
