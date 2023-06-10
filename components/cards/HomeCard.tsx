import dynamic from 'next/dynamic'
import { Card, Text, Button, Row } from '@nextui-org/react'
import React from 'react'

const HomeCard: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row mx-auto p-2">
            <Card css={{ mw: '300px', padding: '2px', margin: '5px' }}>
                <Card.Header>
                    <Text b>Card Title</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: '$10' }}>
                    <Text>
                        Lorem ipsum dolor amet, siri trapet polo damphet.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="sm" light>
                            Cancel
                        </Button>
                        <Button size="sm">Agree</Button>
                    </Row>
                </Card.Footer>
            </Card>

            <Card css={{ mw: '300px', padding: '2px', margin: '5px' }}>
                <Card.Header>
                    <Text b>Card Title</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: '$10' }}>
                    <Text>
                        Lorem ipsum dolor amet, siri trapet polo damphet.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="sm" light>
                            Share
                        </Button>
                        <Button size="sm" color="secondary">
                            Learn more
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>

            <Card css={{ mw: '300px', padding: '2px', margin: '5px' }}>
                <Card.Header>
                    <Text b>Card Title</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: '$10' }}>
                    <Text>
                        Lorem ipsum dolor amet, siri trapet polo damphet.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="sm" light>
                            Share
                        </Button>
                        <Button size="sm" color="secondary">
                            Learn more
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
}
export default HomeCard
