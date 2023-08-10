import { useRouter } from 'next/router'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
export default function Index() {
    const router = useRouter();
    return (
        <div className="h-[70vh] mx-20">
            <div className="flex flex-col md:flex-row justify-between">

            <Card css={{ w: "30%", h: "400px" }}  isHoverable>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Basic
                    </Text>
                    <Text h3 color="black">
                    Small Business 
                    </Text>
                    <p>5-10 Cars</p>
                </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://media.istockphoto.com/id/1218608133/vector/safe-home-delivery-during-coronavirus-covid-19-epidemic.jpg?s=612x612&w=0&k=20&c=-o_9XEUJM98u1oo55GaOnoH6CiRNN5WWR4j23oZ241Q="
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
                </Card.Body>
                <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
                >
                <Row>
                    <Col>
                    <Text color="#000" size={12}>
                        Available soon.
                    </Text>
                    <Text color="#000" size={12}>
                        Get notified.
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary" onPress={()=>router.push("/payment?plan=basic")}>
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            Get it
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>

            <Card css={{ w: "30%", h: "400px" }}  isHoverable>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="##AAAAAA">
                    Advanced
                    </Text>
                    <Text h3 color="black">
                    KickStarter
                    </Text>
                    <p>10-40 cars</p>
                </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
                </Card.Body>
                <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
                >
                <Row>
                    <Col>
                    <Text color="#000" size={12}>
                        Available soon.
                    </Text>
                    <Text color="#000" size={12}>
                        Get notified.
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary" onPress={()=>router.push("/payment?plan=advanced")}>
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            Get it
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>

            <Card css={{ w: "30%", h: "400px" }} isHoverable>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#AAAAAAA">
                    Premium
                    </Text>
                    <Text h3 color="black">
                    Industrialist
                    </Text>
                    <p>40+ cars</p>
                </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://img.freepik.com/premium-vector/delivery-service-concept-world-map-cargo-van-courier-with-boxes-vector-illustration_357257-1254.jpg?w=2000"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
                </Card.Body>
                <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
                >
                <Row>
                    <Col>
                    <Text color="#000" size={12}>
                        Available soon.
                    </Text>
                    <Text color="#000" size={12}>
                        Get notified.
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary" onPress={()=>router.push("/payment?plan=premium")}>
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            Get it
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>

            </div>
        </div>
    )
}