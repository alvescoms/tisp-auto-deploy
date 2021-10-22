import express from 'express';
import deployController from '../controllers/deployController';

const router = express.Router();

router.post('/:branch/:buildPath/:destinationPath/:beforeBuildCommand/:buildCommand/:afterBuildCommand', (request, response) => {

    const headers = request.headers
    const params = request.params
    const body = request.body

    const event = headers['x-github-event']
    const ref = body.ref
    const repositoryName = body?.repository?.name
    const gitUrl = body?.repository?.git_url?.replace('git://', '')


    const branch = params.branch
    const buildPath = params.buildPath
    const destinationPath = params.destinationPath
    const beforeBuildCommand = params.beforeBuildCommand
    const buildCommand = params.buildCommand
    const afterBuildCommand = params.afterBuildCommand

    if (event == 'push') {

        /**
         * Check if branch need deploy
         */

        try {
    
            if (ref.split('/').includes(branch)) {
    
                deployController.deploy(repositoryName, gitUrl, buildPath, destinationPath, beforeBuildCommand, buildCommand, afterBuildCommand)
        
                return response.status(200).json({
                    deployed: true,
                    message: 'Deploy finish with success!'
                })
        
            }
            else {
        
                return response.status(500).json({
                    deployed: false,
                    message: 'This commit is not in the branch "' + branch + '"'
                })
        
            }
    
        }
        catch (exception) {
    
            return response.status(500).json({
                deployed: false,
                message: 'Deu alguma merda mermão!'
            })
    
        }   

    }
    else {

        return response.status(500).json({
            deployed: false,
            message: 'Request is not a push action!'
        })

    }

})

router.get('/',  (request, response) => {

    return response.json({
        data: []
    })

})

router.get('/:id',  (request, response) => {

    return response.json({
        data: []
    })

})


router.post('/', async (request, response) => {

    const body = request.body

    console.log('bodu', body)

    const deploy = deployController.create({
        code: body.code,
        name: body.name,
        description: body.description,
        branch: body.branch,
        buildPath: body.buildPath,
        destinantioPath: body.destinantioPath,
        beforeBuildCommand: body.beforeBuildCommand,
        buildCommand: body.buildCommand,
        afterBuildCommand: body.afterBuildCommand
    })

    console.log('deploy', deploy)

    return response.json({
        data: []
    })

})


router.put('/:id',  (request, response) => {

    return response.json({
        data: []
    })

})

export default router;