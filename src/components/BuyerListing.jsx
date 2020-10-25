import React from "react";
import { Container, Button, Card, Image } from "semantic-ui-react";

import './BuyerListing.css';
export default ({ seller, produce, description, price }) => {
  return (
    <Card className="">
      <Image src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg" />
      <Card.Content>
        <Card.Header style={{ fontFamily: "Roboto" }}>
          <div className="seller">
            <Image src={seller.image} avatar />
            {`${seller.name} is selling`}
          </div>
        </Card.Header>
        <Card.Header style={{ fontFamily: "Roboto" }}>{produce}</Card.Header>
        <Card.Description style={{ fontFamily: "Roboto" }}>
          {description}
        </Card.Description>
        <div className="center">
          <Button>Visit store page</Button>
        </div>
      </Card.Content>
    </Card>
  );
};
