import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

function DataHarryPotter() {
  const [dataHarryPotter, setDataHarryPotter] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((result) => result.json())
      .then((result) => setDataHarryPotter(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {dataHarryPotter.map((item) => (
        <section>
          <div className="Card">
            <Card border="light" style={{ width: "10rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.species}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      ))}
    </>
  );
}
export default DataHarryPotter;
