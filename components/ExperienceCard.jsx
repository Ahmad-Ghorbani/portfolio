import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <Fade left duration={1000} distance="40px">
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <Color src={data.companylogo} format="hex">
            {(color) => (
              <CardHeader
                style={{ background: data.companylogo ? color.data : "gray" }}
              >
                <h5 className="text-white">{data.company}</h5>
              </CardHeader>
            )}
          </Color>
          <CardBody className="py-5">
            {data?.companylogo && (
              <div
                className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={data.companylogo}
                  // src="/public/img/icons/common/tiss.png"
                  style={{ width: "100px", height: "100px" }}
                  alt={data.companylogo}
                />
              </div>
            )}
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc, index) => {
                      return <li key={index}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
