import React, { useEffect } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";
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
  UncontrolledCarousel,
  Progress,
} from "reactstrap";
import Navbars from "./Navbars";
import path5Img from "./../styles/img/path5.png";

const carouselItems = [
  {
    src: "/mockup-all-devices-rehber.png" /* require("./../styles/img/denys.jpg").default */,
    altText: "Kocaeli Büyükşehir Belediyesi Rehberi",
    caption: "Şehir Rehberi - Kocaeli BB",
    key: 1,
  },
  {
    src: "/enbis-phone-tablet-mokcup.png",
    altText: "ENBİS Kocaeli Büyükşehir Belediyesi",
    caption: "Enerji Bilgi Sistemi - Kocaeli BB",
    key: 2,
  },
  {
    src: "/food-recipe-2-phones.png",
    altText: "Yemek Tarifleri - Freelance",
    caption: "Delicious Recipes",
    key: 3,
  },
];

let ps = null;

export default function ProfilePage() {
  const router = useRouter();

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
                              <td>Kocaeli Rehberi</td>
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
                  <UncontrolledCarousel
                    keyboard
                    enableTouch
                    pause="hover"
                    items={carouselItems}
                    onChange={(evt) => console.log(evt)}
                  />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projelerim</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Favorilere
                    ekle
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Dahası...
                  </Button>
                </div>
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
                        color="primary"
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
