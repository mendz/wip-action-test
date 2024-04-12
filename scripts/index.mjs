import fs from 'fs/promises';

console.log('Hello 👋🏼');

// get the first file version
const firstVersion = JSON.parse(await fs.readFile('./src/file1.json', 'utf-8'))?.version;
console.log("🚀 ~ firstVersion:", firstVersion);

// get all the other versions
const secondVersion = JSON.parse(await fs.readFile('./src/file2.json', 'utf-8'))?.version;
const thirdVersion = JSON.parse(await fs.readFile('./src/file3.json', 'utf-8'))?.version;
console.log("🚀 ~ secondVersion:", secondVersion);
console.log("🚀 ~ thirdVersion:", thirdVersion);

// check the version against the other versions
const isSameVersions = [secondVersion, thirdVersion].every((version) => version === firstVersion);

// if the version is not the same, throw an error
if (!isSameVersions) {
    console.error(`🚨 The versions are not the same. First version: ${firstVersion}, Second version: ${secondVersion}, Third version: ${thirdVersion}`);
    process.exit(1);
}

// if the version is the same, do nothing
console.log('✅ The versions are the same. Nothing to do.');