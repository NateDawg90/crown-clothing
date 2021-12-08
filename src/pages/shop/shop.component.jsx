import React, { useState} from "react";
import SHOP_DATA from './shop.data.js'
import CollectionPreview from "../../components/collection-preview/collection-preview.jsx";

const ShopPage = () => {
  let [collections, setCollections] = useState(SHOP_DATA)
console.log(collections, 'hello')
  return (
    <div className='shop-page'>

      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  );
}

export default ShopPage;