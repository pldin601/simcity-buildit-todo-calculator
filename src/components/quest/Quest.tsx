import * as React from "react";
import { Container, Table, Row, Col } from "reactstrap";
import ProduceProduct from "./ProduceProduct";
import CollectProduct from "./CollectProduct";
import WaitTime from "./WaitTime";
import HumanTime from "../HumanTime";

export default function Quest({ log }) {
  let prevTime = 0;

  const { time: totalTime } = log[log.length - 1];

  return (
    <Container>
      <Table size={"sm"}>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        {React.Children.toArray(
          log.map(({ product, quantity, message, time }) => {
            const delta = time - prevTime;
            prevTime = time;
            return (
              <>
                {delta > 0 && (
                  <tr>
                    <td>
                      <WaitTime time={delta} />
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    {message === "START" ? (
                      <ProduceProduct product={product} quantity={quantity} />
                    ) : (
                      <CollectProduct product={product} quantity={quantity} />
                    )}
                  </td>
                </tr>
              </>
            );
          })
        )}
      </Table>
      <Row>
        <Col>
          Approx. Time: <HumanTime time={totalTime} />
        </Col>
      </Row>
    </Container>
  );
}
