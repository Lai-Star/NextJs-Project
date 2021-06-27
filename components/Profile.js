import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress,
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import Link from "next/link";
import classnames from "classnames";
import Navbars from "./Navbars";

const carouselItems = [
  {
    src: "/mockup-all-devices-rehber.png",
    altText: "Kocaeli Büyükşehir Belediyesi Rehberi",
    caption: "Şehir Rehberi - Kocaeli BB",
  },
  {
    src: "/enbis-phone-tablet-mokcup.png",
    altText: "ENBİS Kocaeli Büyükşehir Belediyesi",
    caption: "Enerji Bilgi Sistemi - Kocaeli BB",
  },
  {
    src: "/food-recipe-2-phones.png",
    altText: "Yemek Tarifleri - Freelance",
    caption: "Delicious Recipes",
  },
];

let ps = null;

export default function ProfilePage() {
  const router = useRouter();

  // slider states
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [tabs, setTabs] = React.useState(1);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  useEffect(() => {
    const path = window.location.hash;
    console.log(path, window.location.pathname);
    if (path?.includes("#")) {
      router.push(window.location.pathname.replace("#", "#aba"));
    }
  });

  const handleNextSlide = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handlePreviousSlide = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const handleActiveIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselItems.map((item, i) => {
    return (
      <CarouselItem
        key={i}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const projectTexts = [
    <div key={0}>
      <p className="profile-description text-left">
        Şehir Rehberi uygulaması, Kocaeli'deki donatı (POI), hat, durak, parsel
        vb. bilgilerini aratabildiğiniz yerel bir Maps uygulamasıdır. Kocaeli
        Büyükşehir Belediyesi için React ile yapılmıştır.
      </p>
      <div className="btn-wrapper pt-3">
        <Link href="https://rehber.kocaeli.bel.tr/" passHref>
          <Button className="btn-simple" color="primary" target="_blank">
            <i className="tim-icons icon-controller mr-1" /> Uygulama
          </Button>
        </Link>
      </div>
    </div>,
    <p key={1} className="profile-description text-left">
      Enerji bilgi sistemi, elektrik ve mekanik envanterinin konum bazlı
      kaydedildiği ve raporlandığı kurumiçi bir uygulamadır. Kocaeli Büyühşehir
      Belediyesi için React ile geliştirilmiştir.
    </p>,
    <div key={2}>
      <p className="profile-description text-left">
        Yemek tariflerini arayabileceğiniz bir mobil uygulamasıdır. React Native
        ile freelance olarak geliştirilmiştir.
      </p>
      <div className="btn-wrapper pt-3">
        <Link href="https://github.com/bugraaydin1/recipe-app" passHref>
          <Button className="btn-simple" color="primary" target="_blank">
            <i className="fab fa-github fa-1x mr-1" /> Uygulama
          </Button>
        </Link>
      </div>
    </div>,
  ];

  return (
    <>
      <Navbars />
      <div className="wrapper">
        <div id="my-profile" className="section">
          {/*  className="page-header" */}
          <img alt="dots-image" /* className="dots" */ src={"/dots.png"} />
          <img alt="path-image" className="path" src={"/path5.png"} />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Ahmet Buğra Aydın</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Frontend Geliştirici - React | React Native
                  <br />
                  <br />
                  Next.js ● Typescript ● JS ● CSS / SCSS / JSS ● HTML5 ● Git ●
                  Material UI ● Reactstrap ● Webpack ● Expo ● C# ● Unity
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round p-2"
                    color="linkedin"
                    href="https://www.linkedin.com/in/ahmetbugraaydin/"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Linkedin
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round p-2"
                    color="github"
                    href="https://github.com/bugraaydin1"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Github
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round p-2"
                    color="facebook"
                    href="mailto:bugraaydin1@hotmail.com"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fa fa-envelope" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Email
                  </UncontrolledTooltip>
                </div>
              </Col>

              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      className="img-center img-fluid rounded-circle"
                      alt="ABA cartoon"
                      src={"/aba-cartoon.png"}
                    />
                    <h4 className="title">Profilim</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Projeler
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Yeteneklerim
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          Blog
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table responsive>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>Proje Adı</th>
                              <th>Proje Sahibi</th>
                              <th className="text-center">Durum</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td>
                                <a
                                  href="https://rehber.kocaeli.bel.tr/"
                                  target="_blank"
                                >
                                  Kocaeli Rehberi
                                </a>
                              </td>
                              <td>Kocaeli Büyükşehir Belediyesi</td>
                              <td className="text-center">
                                <div className="progress-container progress-success">
                                  <span className="progress-badge">%90</span>
                                  <Progress max="100" value="80"></Progress>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td>ENBİS - Envanter</td>
                              <td>Kocaeli Büyükşehir Belediyesi</td>
                              <td className="text-center">
                                <div className="progress-container progress-primary">
                                  <span className="progress-badge">%100</span>
                                  <Progress max="100" value="100"></Progress>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">3</td>
                              <td>Yemek Tarifleri</td>
                              <td>ABA Freelance</td>
                              <td className="text-center">
                                <div className="progress-container progress-warning">
                                  <span className="progress-badge">%60</span>
                                  <Progress max="100" value="60"></Progress>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <div className="progress-container progress-info">
                          <span className="progress-badge">React</span>
                          <Progress max="100" value="80">
                            <span className="progress-value">{/* 80% */}</span>
                          </Progress>
                        </div>
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">React Native</span>
                          <Progress max="100" value="70">
                            <span className="progress-value">{/* 70% */}</span>
                          </Progress>
                        </div>
                        <div className="progress-container progress-success">
                          <span className="progress-badge">Material UI</span>
                          <Progress max="100" value="75">
                            <span className="progress-value">{/* 75% */}</span>
                          </Progress>
                        </div>
                        <div className="progress-container progress-warning">
                          <span className="progress-badge">TypeScript</span>
                          <Progress max="100" value="50">
                            <span className="progress-value">{/* 50% */}</span>
                          </Progress>
                        </div>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Yazılarım</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>How popular React is?</td>
                            </tr>
                            <tr>
                              <td>Common Mistakes on JS...</td>
                            </tr>
                            <tr>
                              <td>10 Tips About using Hooks...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="my-projects" className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <Carousel
                    keyboard
                    enableTouch
                    pause="hover"
                    activeIndex={activeIndex}
                    next={handleNextSlide}
                    previous={handlePreviousSlide}
                  >
                    <CarouselIndicators
                      items={carouselItems}
                      activeIndex={activeIndex}
                      onClickHandler={handleActiveIndex}
                    />
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Önceki"
                      onClickHandler={handlePreviousSlide}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Sonraki"
                      onClickHandler={handleNextSlide}
                    />
                  </Carousel>
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projelerim</h1>
                <h5 className="text-on-back">02</h5>
                {projectTexts[activeIndex]}
              </Col>
            </Row>
          </Container>
        </div>
        <div id="contact-us" className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">İletişim</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Ad Soyad</label>
                            <Input placeholder="Ad Soyad" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email</label>
                            <Input
                              placeholder="adiniz@email.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Telefon</label>
                            <Input
                              placeholder="532 - 333 4455"
                              pattern="[1-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}"
                              type="tel"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Şirket</label>
                            <Input placeholder="Şirket" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Mesaj</label>
                            <Input
                              placeholder="Yeni bir projem var!"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="warning"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        <b>Gönder</b>
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Mesajınızı sabırsızlıkla bekliyorum!
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Email</h4>
                    <p>
                      bugraaydin1@hotmail.com <br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Freelance Çalışma Saatleri</h4>
                    <p>
                      Pztsi - Cuma, 19:00 - 22:00 <br />
                      Cmtsi - Pazar, 10:00 - 23:00 <br />
                      A. Buğra Aydın <br />
                      0538 596 8120 <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
