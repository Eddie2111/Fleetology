import { Card, Text, Button, Row } from '@nextui-org/react'

interface Props {
    title: string
    description: string
}

export default function IntroCard({ title, description }: Props) {
    return (
        <Card isHoverable css={{ mw: '330px' }}>
            <Card.Header>
                <Text b>{title}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: '$10' }}>
                <Text>{description}</Text>
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
    )
}
