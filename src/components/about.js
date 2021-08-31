import { Navbar, Container, Col, Figure, Row } from "react-bootstrap";
import { SiNextdoor } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import logo from "./img/logo.png";
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
      origin: "Indonesia",
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

  return ();
}
export default About;