import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify';
import { Grid, Card, Text, Divider, Table, Button, Input, Spacer, Page } from '@geist-ui/react'
import { ArrowLeft, Save } from '@geist-ui/react-icons'

const DeployEdit = () => {

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        id: '',
        code: '',
        name: '',
        description: '',
        branch: '',
        buildPath: '',
        destinantioPath: '',
        beforeBuildCommand: '',
        buildCommand: '',
        afterBuildCommand: ''
    })

    const history = useHistory()

    const setInputValue = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [name]: event?.target?.value
        })

    }

    const handleSave = () => {

        if (!form.code) {

            toast.info("Please fill in the 'code' field.", {
                toastId: 'validateCode'
            });

        }
        else if (!form.name) {

            toast.info("Please fill in the 'name' field.", {
                toastId: 'validateName'
            });

        }
        else if (!form.branch) {

            toast.info("Please fill in the 'branch' field.", {
                toastId: 'validateBranch'
            });

        }
        else if (!form.buildPath) {

            toast.info("Please fill in the 'build path' field.", {
                toastId: 'validateBuildPath'
            });

        }
        else if (!form.destinantioPath) {

            toast.info("Please fill in the 'destination path' field.", {
                toastId: 'validateDestinationPath'
            });

        }
        else if (!form.beforeBuildCommand) {

            toast.info("Please fill in the 'before build command' field.", {
                toastId: 'validateBeforeBuildCommand'
            });

        }
        else if (!form.buildCommand) {

            toast.info("Please fill in the 'build command' field.", {
                toastId: 'validateBuildCommand'
            });

        }
        else if (!form.afterBuildCommand) {

            toast.info("Please fill in the 'after build command' field.", {
                toastId: 'validateAfterBuildCommand'
            });

        }
        else {

            setLoading(true)

            alert('adasd')

        }

    }

    return (

        <Grid.Container justify='center'>
            <Card width="80%" shadow>
                <Card.Content>
                    <Text b>New Deploy</Text>
                </Card.Content>
                <Divider  />
                <Card.Content>
                    <Grid.Container gap={1.5} justify='flex-start'>
                        <Grid xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Text h4>Details</Text>
                            <Divider />
                        </Grid>
                        <Grid xs={24} sm={24} md={3} lg={3} xl={3}>
                            <Input scale={3/2.4} placeholder="Code" width='100%' onChange={(event) => setInputValue('code', event)} value={form.code} maxLength={6}>
                                * Code
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={21} lg={21} xl={21}>
                            <Input scale={3/2.4} placeholder="Name" width='100%' onChange={(event) => setInputValue('name', event)} value={form.name}>
                                * Name
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Input scale={3/2.4} placeholder="Description" width='100%' onChange={(event) => setInputValue('description', event)} value={form.description}>
                                Description
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Text h4>Build Settings</Text>
                            <Divider />
                        </Grid>
                        <Grid xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Input scale={3/2.4} placeholder="Ex: master" width='100%' onChange={(event) => setInputValue('branch', event)} value={form.branch}>
                                * Branch
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={10} lg={10} xl={10}>
                            <Input scale={3/2.4} placeholder="Ex: /disc" width='100%' onChange={(event) => setInputValue('buildPath', event)} value={form.buildPath}>
                                * Build Path
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={10} lg={10} xl={10}>
                            <Input scale={3/2.4} placeholder="Ex: /usr/src/app" width='100%' onChange={(event) => setInputValue('destinantioPath', event)} value={form.destinantioPath}>
                                * Destination Path
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Text h4>Commands</Text>
                            <Divider />
                        </Grid>
                        <Grid xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Input scale={3/2.4} placeholder="Ex: npm install" width='100%' onChange={(event) => setInputValue('beforeBuildCommand', event)} value={form.beforeBuildCommand}>
                                * Before Build Command
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={10} lg={10} xl={10}>
                            <Input scale={3/2.4} placeholder="Ex: npm run build" width='100%' onChange={(event) => setInputValue('buildCommand', event)} value={form.buildCommand}>
                                * Build Command
                            </Input>
                        </Grid>
                        <Grid xs={24} sm={24} md={10} lg={10} xl={10}>
                            <Input scale={3/2.4} placeholder="Ex: npm run start" width='100%' onChange={(event) => setInputValue('afterBuildCommand', event)} value={form.afterBuildCommand}>
                                * After Build Command
                            </Input>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container justify='flex-start' marginTop={'10px'}>
                        <Grid xs={24} sm={24} md={24} lg={24} xl={24} justify='flex-end'>
                            <Button auto type="secondary-light" marginRight='10px' ghost icon={<ArrowLeft />} loading={loading} onClick={() => history.goBack()}>Back</Button>
                            <Button auto type="success-light" icon={<Save />} loading={loading} onClick={handleSave}>Save</Button>
                        </Grid>
                    </Grid.Container>
                </Card.Content>
            </Card>
        </Grid.Container>

    )

}

export default DeployEdit