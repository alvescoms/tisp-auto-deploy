import React from 'react'
import { useHistory } from 'react-router'
import { Grid, Card, Text, Divider, Table, Button, Input, Page } from '@geist-ui/react'
import { File, Search } from '@geist-ui/react-icons'

const DeployList = () => {
    
    const history = useHistory()

    const data = [{}]

    return (

        <Grid.Container justify="center">
            <Card width="80%" shadow>
                <Card.Content>
                    <Text b>Deploy List</Text>
                </Card.Content>
                <Divider  />
                <Card.Content>
                    <Grid.Container justify='space-between' marginBottom={'10px'}>
                        <Grid xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Button auto type="success-light" icon={<File />} onClick={() => history.push('/edit')}>New Deploy</Button>
                        </Grid>
                        <Grid xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Input scale={3/2.4} iconRight={<Search />} placeholder="Search..." width='100%' />
                        </Grid>
                    </Grid.Container>
                    <Table data={data}>
                    <Table.Column prop="property" label="property" />
                        <Table.Column prop="code" label="Code" />
                        <Table.Column prop="name" label="Name" />
                        <Table.Column prop="branch" label="Branch" />
                        <Table.Column prop="destinationPath" label="Destination Path" />
                        <Table.Column prop="beforeBuildCommand" label="Before Build Command" />
                        <Table.Column prop="buildCommand" label="Build Command" />
                        <Table.Column prop="afterBuildCommand"  label="After Build Command" />
                    </Table>
                </Card.Content>
            </Card>
        </Grid.Container>

    )

}

export default DeployList