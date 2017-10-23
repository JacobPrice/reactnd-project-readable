import React from 'react'
import { Button, Card, Image, Label } from 'semantic-ui-react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../../components/Page'

const PostCard = () => (
  <Page>
    <Card raised className='test'>
      <Card.Content>
        <Label ribbon size='large' color='blue' content='12' />
        <Card.Header>
        Jenny Lawrence
        </Card.Header>
        <Card.Meta>
        Yesterday at 11:41 PM
        </Card.Meta>
        <Card.Description>
        Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button color='green' icon='thumbs outline up' content='Like' />
          <Button color='red' icon='thumbs outline down' content='Dislike' />
          {/* <Button basic color='green'>Edit</Button>
          <Button basic color='red'>Delete</Button> */}
        </div>
      </Card.Content>
    </Card>
    <style jsx global>{`
      .ui.card>.content {
        padding: 0.5em 0.8em;
      }
      .ui.card>.content>.header:not(.ui) {
        margin: 0.25em 0;
      }
    `}</style>
  </Page>
)
const CardExampleGroups = () => (
  <Card.Group>
    <PostCard />
  </Card.Group>
)

export default CardExampleGroups
