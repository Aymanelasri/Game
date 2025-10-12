import './Projets.css';
export default function All() {
  
const products = {
  women: [
    {id:1,title:"Elegant Midi Dress",prix:"300 DH",description:"A lightweight printed midi dress that offers comfort and elegance for everyday wear or special occasions.",img:"/images/women/photo1.jpg"},
    {id:2,title:"Satin Blouse",prix:"200 DH",description:"A simple satin blouse with a soft collar, perfect for work or casual evening outings.",img:"/images/women/photo2.jpg"},
    {id:3,title:"Leather Crossbody Bag",prix:"400 DH",description:"A small adjustable leather crossbody bag with a classic yet modern look.",img:"/images/women/photo3.jpg"},
    {id:4,title:"Comfy Sneakers",prix:"250 DH",description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/women/photo4.jpg"},
    {id:5,title:"Denim Jacket",prix:"350 DH",description:"Trendy denim jacket that pairs perfectly with multiple outfits.",img:"/images/women/photo5.jpg"},
    {id:6,title:"Wool Scarf",prix:"150 DH",description:"Soft and warm wool scarf with elegant colors for the winter season.",img:"/images/women/photo6.jpg"},
    {id:7,title:"Skinny Jeans",prix:"300 DH",description:"Slim-fit jeans with stretch fabric for comfort and flexibility.",img:"/images/women/photo7.jpg"},
    {id:8,title:"Classic Heels",prix:"400 DH",description:"Medium-heel classic shoes, suitable for office and formal events.",img:"/images/women/photo8.jpg"},
    {id:9,title:"Minimalist Watch",prix:"500 DH",description:"A simple wristwatch with a clean and elegant face, perfect for everyday use.",img:"/images/women/photo9.jpg"},
    {id:10,title:"Floral Perfume",prix:"700 DH",description:"A soft floral fragrance that lasts all day with refreshing notes.",img:"/images/women/photo10.jpg"}

  ],
  men: [
    {id:1,title:"Classic T-Shirt",prix:"250 DH",description:"A timeless classic t-shirt with a classic fit and classic colors.",img:"/images/men/photo1.jpg"},
    {id:2,title:"Sporty Sneakers",prix:"350 DH",description:"Lightweight sport sneakers with cushioned soles for all-day comfort.",img:"/images/men/photo2.jpg"},
    {id:3,title:"Leather Wallet",prix:"450 DH",description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/men/photo3.jpg"},
    {id:4,title:"Casual Shirt",prix:"100 DH",description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/men/photo4.jpg"},
    {id:5,title:"Chino Pants",prix:"50 DH",description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/men/photo5.jpg"},
    {id:6,title:"Wool Coat",prix:"800 DH",description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/men/photo6.jpg"},
    {id:7,title:"Aviator Sunglasses",prix:"600 DH",description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/men/photo7.jpg"},
    {id:8,title:"Leather Belt",prix:"350 DH",description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/men/photo8.jpg"},
    {id:9,title:"Digital Watch",prix:"500 DH",description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/men/photo9.jpg"},
    {id:10,title:"Digital Watch",prix:"700 DH",description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/men/photo10.jpg"}     
  ],
  kids: [
    {id:1,title:"Graphic T-Shirt",prix:"150 DH",description:"A fun graphic t-shirt with colorful prints, perfect for everyday wear.",img:"/images/kids/photo1.jpg"},
    {id:2,title:"Denim Overalls",prix:"200 DH",description:"Durable denim overalls with adjustable straps, ideal for playtime.",img:"/images/kids/photo2.jpg"},
    {id:3,title:"Leather Wallet",prix:"250 DH",description:"A compact leather wallet with multiple compartments for cards and cash.",img:"/images/kids/photo3.jpg"},
    {id:4,title:"Casual Shirt",prix:"300 DH",description:"A casual shirt with a relaxed fit, perfect for weekend outings.",img:"/images/kids/photo4.jpg"},
    {id:5,title:"Chino Pants",prix:"350 DH",description:"Comfortable chino pants with a modern fit, suitable for both work and casual wear.",img:"/images/kids/photo5.jpg"},
    {id:6,title:"Wool Coat",prix:"400 DH",description:"A warm wool coat with a classic design, perfect for the winter season.",img:"/images/kids/photo6.jpg"},
    {id:7,title:"Aviator Sunglasses",prix:"450 DH",description:"Stylish aviator sunglasses with UV protection for sunny days.",img:"/images/kids/photo7.jpg"},
    {id:8,title:"Leather Belt",prix:"350 DH",description:"A durable leather belt with a classic buckle, suitable for both casual and formal outfits.",img:"/images/kids/photo8.jpg"},
    {id:9,title:"Digital Watch",prix:"100 DH",description:"A sporty digital watch with multiple functions, perfect for active lifestyles.",img:"/images/kids/photo9.jpg"},
    {id:10,title:"Cologne",prix:"100 DH",description:"A fresh and invigorating cologne with woody and citrus notes.",img:"/images/kids/photo10.jpg"}
  ],
}
    
  return (
    <>
     <main >
  {/* Video Section */}
  <section className="video-container">
    <video autoPlay loop muted className="video-full">
      <source src="video2.mp4" type="video/mp4" />
    </video>
  </section>

  {/* All Products Section */}
  <section className="all-products">
    <h2 className="text-center my-4" style={{ fontFamily: 'calibri', fontWeight: 'bold' }}>ALL PRODUCTS</h2>
    <div className="container d-flex text-center mb-4 justify-content-around">
      <div>
        <img className='imgc' id='img1' src="/images/3img/men2.jpg" alt="" />
        <h3>men</h3>

      </div>
      <div>
        <img className='imgc' src="/images/3img/women.jpg" alt="" />
        <h3>women</h3>

      </div>
      <div>
        <img className='imgc' src="/images/3img/kids.jpg" alt="" />
        <h3>kids</h3>
      </div>
     

    </div>
    <div className="container">
      <div className="row">
        {Object.entries(products).map(([product, keys]) => (
          keys.map(product => (
            <div key={`${product}-${product.id}`} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text"><strong>PRIX : </strong><strong>{product.prix}</strong></p>
                  <button className='btn btn-light '>Voir Détails</button><br /><br />
                  <button className='btn btn-primary'>Ajouter au Panier</button>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  

  
        
  </section>
</main>

    </>
  );
}
