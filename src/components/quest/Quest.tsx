import * as React from "react";
import {Col, Row, Table} from "reactstrap";
import ProduceProduct from "./ProduceProduct";
import HumanTime from "../HumanTime";
import {GroupedPlanItem} from "../../domain/Planner";

export default function Quest({ items }: { items: GroupedPlanItem[] }) {
  const { time: totalTime } = items[items.length - 1];

  return (
    <>
      <Table size={"sm"}>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Time</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            items.map(({ product, quantity, time }, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <ProduceProduct product={product} quantity={quantity} />
                    </td>
                    <td>
                      <HumanTime time={time} />
                    </td>
                    <td>-</td>
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </Table>
      <Row>
        <Col>
          Approx. Time: <HumanTime time={totalTime} />
        </Col>
      </Row>
    </>
  );
}
