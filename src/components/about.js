import { Navbar, Container, Col, Figure, Row } from "react-bootstrap";
import { SiNextdoor } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import logo from "./img/logo1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Adit from "./img/adit.png";
import Tri from "./img/tri.png";
import Maulana from "./img/maulana.png";
import Sarah from "./img/sarah.png";

function About() {
  const [profil] = useState([
    {
      name: "Aditiya Nurwahid",
      origin: "Bekasi",
      image: Adit,
      school: "D3 Sistem Informasi, UBSI",
    },
    {
      name: "Maulana Zulfikar",
      origin: "Jakarta",
      image: Maulana,
      school: "S1 Ekonomi Manajemen, UT",
    },
    {
      name: "Sarah Handari",
      origin: "Jakarta",
      image: Sarah,
      school: "Teknik Kimia, UMS",
    },
    {
      name: "Tri",
      origin: "Tangerang Selatan",
      image: Tri,
      school: "S1 Pendidikan Bahasa Inggris, UNINDRA",
    },
  ]);

  return (
    <div className="About">
      <section>
        <Navbar fixed="top" variant="dark" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img alt="" src={logo} width="150" height="50" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Link to="/" style={{ justifyContent: "end" }}>
              <h6>
                <strong> Logout</strong>
              </h6>
            </Link>
          </Container>
        </Navbar>
      </section>
      <section>
        <Navbar fixed="bottom" variant="dark" bg="light">
          <Container className="text-center mt-2 mb-2">
            <Col>
              <Link to="/home">
                <SiNextdoor size={25} />
              </Link>
            </Col>
            <Col>
              <Link to="/about">
                <FcAbout size={25} />
              </Link>
            </Col>
          </Container>
        </Navbar>
      </section>
      <section>
        <p style={{ textAlign: "center", fontSize: "50px", marginTop: "4rem" }}>
          <strong> About Us</strong>
        </p>
        <p style={{ textAlign: "center" }}>
          {" "}
          <strong>Kelompok 4</strong>
        </p>
        <Container className="AboutUs">
          <Row>
            <Col>
              <p>
                Kelompok 4 adalah salah satu dari 4 kelompok dalam <i>"Jasa Raharja Resilience Program"</i> yang merupakan suatu program pelatihan bersertifikat, yang bertujuan memberikan kemampuan teknis dalam dua bidang; salah satunya
                bidang digital, berupa basic coding. Program berlangsung secara intensif selama 3 bulan penuh, mulai dari bulan Juni hingga Agustus 2021. Dan ini adalah tugas akhir kelompok setelah mempelajari semua materi dari awal hingga
                materi tentang ReactJS. Tugas ini bersifat Project yang dikerjakan berkelompok.
              </p>
              <p>
                Project ini kami persembahkan kepada semua pihak, kami mengucapkan terima kasih yang sebesar-besarnya kepada{" "}
                <a href="https://www.jasaraharja.co.id/">
                  <i>Jasa Raharja</i>
                </a>{" "}
                yang telah menyelanggarakan kesempatan belajar ini. Serta kepada semua kakak-kakak dari{" "}
                <a href="https://skilvul.com/">
                  <i>Skilvul</i>
                </a>{" "}
                yang dengan sabar membimbing kami dalam proses belajar.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <p style={{ textAlign: "center", fontSize: "25px" }}>
        <i>Presented By</i>
      </p>
      <section>
        {profil.map((item) => (
          <Container className="Profil">
            <Figure>
              <Col>
                <Figure.Image width={130} height={250} alt="171x180" src={item.image} roundedCircle />
              </Col>
            </Figure>
            <ul>
              <li>{item.name}</li>
              <li>{item.origin}</li>
              <li>{item.school}</li>
            </ul>
          </Container>
        ))}
      </section>
    </div>
  );
}
export default About;
