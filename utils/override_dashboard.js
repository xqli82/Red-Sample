//change dashboard image

const path=require('path')
const fs =require('fs')

const rootPath=path.join(__dirname,'..')
const dashPath=path.join(rootPath,'red_dir','node_modules','node-red-dashboard','dist')
const overridePath=path.join(__dirname,'dash')
console.log(dashPath)
console.log(overridePath)

const pngs=['icon64x64.png','icon120x120.png','icon192x192.png']

pngs.forEach(item=>{
    const source=path.join(overridePath,item)
    const goal=path.join(dashPath,item)
    fs.copyFileSync(source,goal)
    console.log(`copy ${source}=>${goal}`)
})