import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const collections = this.state.collections;
    return <div className="shop-page">
		{collections.map(({id, ...collectionData})=>(
			<CollectionPreview key={id} {...collectionData}/>
		))}
	</div>;
  }
}

export default Shop;
