import './tp.css';
import { useState } from 'react';
export default function TpReact() {
    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (product) => {
        setPanier([...panier, product]);
    };
    //[...panier, product]
//هادشي كيسمّى نسخ لائحة قديمة وزيادة منتوج جديد فآخرها/

    
    const products = [
        {id:1, title:'PC PORTABLE gamer Acer VICTUS', price :'7490 DH', thumbnail:'pc1.jpg'},
        {id:2, title:'PC PORTABLE gamer HP VICTUS', price :'2490 DH', thumbnail:'pc2.jpg'},
        {id:3, title:'PC PORTABLE gamer Chromebook Acer', price :'3690 DH', thumbnail:'pc3.jpg'},
        {id:4, title:'PC PORTABLE - HUAWEI', price :'1490 DH', thumbnail:'pc4.jpg'},
    ];
    return (
        <>
            <div>
                <h1 className="text-center mt-3 mb-5">Liste des produits</h1>
            </div>
            <div className="card-group mb-3">
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                        <div className="card-body">
                            <h4 className="card-title">{product.title}</h4>
                            <p className="card-text"><strong>Prix : </strong>{product.price}</p>
                            <button className="btn btn-primary" onClick={() => ajouterAuPanier(product)}>
                                Ajouter au Panier
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* ------------------------ */}
            <div>
                <div className="container mt-5">
                    <h2>Votre Panier</h2>
                    <div>
                        {panier.length === 0 && (
                            <p>Le Panier est Vide</p>
                        )}

                        {panier.length > 0 && (
                            <ul>
                                {panier.map((item, key) => (
                                    <li key={key}>
                                        {item.title} - {item.price}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}