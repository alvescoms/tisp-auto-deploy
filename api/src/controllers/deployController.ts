import { Prisma, PrismaClient } from '@prisma/client'
import { spawn } from 'child_process'

interface DeployModel {
    id?: number,
    code: string,
    name: string,
    description?: string,
    branch: string,
    buildPath: string,
    destinantioPath: string,
    beforeBuildCommand: string,
    buildCommand: string,
    afterBuildCommand: string,
    createdAt?: Date
}

const deploy = (repositoryName: string, gitUrl: string, buildPath: string, destinationPath: string, beforeBuildCommand: string, buildCommand: string, afterBuildCommand: string) => {

    const child = spawn("./src/commands/deploy.sh", [
        '-n', repositoryName, 
        '-g', gitUrl,
        '-b', buildPath,
        '-d', destinationPath,
        '-e', beforeBuildCommand,
        '-u', buildCommand,
        '-a', afterBuildCommand,
    ]);

    child.stdout.on('data', data => {

        console.log(`stdout:\n ${data}`)

    })

    child.stdout.on('end', () => {

        console.log('finishhhhhhhhhhhhhhhhhhh')

    })

    child.stderr.on('data', data => {

        console.error(`stderr: ${data}`)

    })

}

const create = async (data: DeployModel) => {

    const prisma = new PrismaClient()
    
    const response = await prisma.deploy.create({
        data: {
            code: data.code,
            name: data.name,
            description: data.description!,
            branch: data.branch,
            buildPath: data.buildPath,
            destinantioPath: data.destinantioPath,
            beforeBuildCommand: data.beforeBuildCommand,
            buildCommand: data.buildCommand,
            afterBuildCommand: data.afterBuildCommand
        }
    })

    console.log(response)

}

export default {
    deploy,
    create
}