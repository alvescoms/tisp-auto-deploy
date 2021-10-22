import React, { FC, ReactPropTypes } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Text, Image, Page } from '@geist-ui/react'
import logo from '../../assets/images/logo.png'

interface MainProps {
    path: string,
    component: React.ComponentType
}

const Main = (props: MainProps) => {

    return (

        <Page>
            <Page.Header paddingTop='20px'>
                <Grid.Container justify="center">
                    <img src={logo} width='100px' style={{marginLeft: '70px'}} />
                    <Text h2 width='80%' style={{lineHeight: 2.5}}>
                        TISP Auto Deploy
                    </Text>
                </Grid.Container>
            </Page.Header>
            <Page.Content>
                <Route path={props.path} component={props.component} />
            </Page.Content>
        </Page>

    )

}

export default Main