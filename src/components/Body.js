import React from 'react';
import {
    Container,
    Row,
    FormControl,
    Button,
    ListGroup,
    Carousel,
    Col,
    InputGroup,
    Card
} from 'react-bootstrap';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            products: [],
            rating: undefined
        }
    }
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    fetchCategory(url) {
        axios.get(url).then(response => {
            this.setState({ categories: response.data })
        })
    }
    fetchProduct(url) {
        axios.get(url).then(response => {
            this.setState({ products: response.data.slice(0, 4) })
        })
    }
    componentDidMount() {
        this.fetchCategory(
            'http://demo4507124.mockable.io/categories'
        )
        this.fetchProduct(
            'http://demo4507124.mockable.io/products'
        )
    }
    categoryView(category) {
        return (
            category.map((items, i) =>
                <ListGroup.Item
                    key={i}
                    action
                    href="#link2"
                    disabled>
                    {items.name}
                    <i
                        style={{ float: "right" }}
                        className="ti-angle-right">
                    </i>
                </ListGroup.Item>)
        );
    }
    productView(product) {
        return (
            product.map((items, i) =>
                <Col key={i} sm={3}>
                    <Card.Img className="coverProduct" variant="top" src="./src/imgs/style-men-shoes-nike-poster-shoes-wallpaper-hd-jeans.jpg" />
                    <div style={{ paddingTop: 5 }}>
                        <span style={{ fontWeight: "bold" }}>{items.name}</span>
                        <div className="starRating0">
                            <StarRatings
                                rating={2.403}
                                starDimension="20px"
                                starSpacing="2px"
                                starRatedColor="#F3D347"
                            />
                        </div>
                        <div className="price0">
                            <div>
                                <strike className="oldPrice">&#8358;{items.old_price}</strike>
                            </div>
                            <div>
                                <span>&#8358;{items.price}</span>
                            </div>
                        </div>
                    </div>
                </Col>)
        );
    }
    render() {
        return (
            <Container>
                <section>
                    <Row>
                        <Col sm={3} className="textBold">LOGO</Col>
                        <Col sm={7}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="search for products"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button className="btn0" variant="outline-secondary">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Col style={{ textAlign: "center" }}>
                                    <div className="redDot0"></div>
                                    <i className="fa fa-shopping-cart" style={{ fontSize: 25 }}></i>
                                    <p><span className="navIcon">cart</span></p>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <div className="redDot1"></div>
                                    <i className="fa fa-heart" style={{ fontSize: 25 }}></i>
                                    <p><span className="navIcon">cart</span></p>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <div className="redDot1"></div>
                                    <i className="fa fa-bell" style={{ fontSize: 25 }}></i>
                                    <p><span className="navIcon">cart</span></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col sm={3}>
                            <ListGroup className="sidebar-menu" defaultActiveKey="#link1">
                                <ListGroup.Item action href="#link1" className="textBold">CATEGORIES</ListGroup.Item>
                                {
                                    this.categoryView(this.state.categories)
                                }
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./src/imgs/style-men-shoes-nike-poster-shoes-wallpaper-hd-jeans.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="textBold">New Collection</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when looking at it's layout.
                                                </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./src/imgs/thumb-1920-257829.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className="textBold">Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./src/imgs/sneakers_legs_shoes_backlight_116317_1920x1080.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 className="textBold">Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </section>
                <br />
                <section>
                    <Row>
                        <Col sm={12}>
                            <Card className="card0">
                                <Card.Header className="cardHead0">EXPLORE POPULAR CATEGORIES</Card.Header>
                                <Row style={{ padding: 35 }}>
                                    {
                                        this.productView(this.state.products)
                                    }
                                </Row>
                            </Card></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <Card className="card0">
                                <Card.Header className="cardHead0">EXPLORE NEW STUFF</Card.Header>
                                <Row style={{ padding: 35 }}>
                                    {
                                        this.productView(this.state.products)
                                    }
                                </Row>
                            </Card></Col>
                    </Row>
                </section>
            </Container >
        );
    }
}