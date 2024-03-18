const axios = require("axios");

const getDataProductsBySku = (req, res) => {

  const { sku } = req.query;

  let config = {
    method: 'GET',
    maxBodyLength: Infinity,
    // url: `https://promart.myvtex.com/api/catalog_system/pub/products/search?fq=skuId:156235`,
    url: `https://promart.myvtex.com/api/catalog_system/pub/products/search?fq=skuId:${sku}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  axios.request(config)
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    res.status(400).json(error.message)
  })
}

module.exports = { getDataProductsBySku }