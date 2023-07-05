import { Card, Text } from '@nextui-org/react'

interface Props {
    title: string
    description: string
}

export default function Cards({ title, description }: Props) {
    return (
        <Card isHoverable variant="bordered" css={{ mw: '400px' }}>
            <Card.Header>
                <Text b>{title}</Text>
            </Card.Header>
            <Card.Body>
                <Text>{description}</Text>
            </Card.Body>
        </Card>
    )
}
