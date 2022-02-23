import React, {useContext, useState} from "react";
import "./Product.css";
import APIContext from '../../../Contexts/APIContext';

export default function Product() {

    const { product, test, loading, loadingProduct } = useContext(APIContext);

    const [mainImage, setMainImage] = useState(product.images[0].src);
    const mainImageOriginal = product.images[0].src;
    const additionalImages = product.images.map((image, key) => <img key={"image" + key} className="additional-images__img" src={image.src} alt="additional image" onMouseEnter={()=>showImageLarge(image.src)} onMouseLeave={()=>showMainImage()}/>)

    const showImageLarge = (imageSrc)=>{
        setMainImage(imageSrc);
    }
    const showMainImage = ()=>{
        setMainImage(mainImageOriginal)
    }

    return (
            <div className="product d-flex jc-sb">

                    <div className="content col-5">

                        <div className="flex-popup">
                            <img className="primary-image__img" src={mainImage} alt="PrimaryImage"/>
                        </div>

                        <div className="flex-popup">
                            <div className="additional-images d-flex">
                                {additionalImages}
                            </div>
                        </div>

                    </div>

                    <div className="col-6 product-description">
                        <h1 className="product-description-header">{product.vendor}</h1>
                        <p>{product.title}</p>
                        <h5 className="fw-bold">${product.maxPrice}</h5>
                        <div className="d-flex margin-bottom-extra">
                            <a className="black-button text-center" href={loadingProduct !== true && console.log(test)}>Buy Now</a>
                        </div>
                        <p>{product.title}</p>
                        <p>Size: <span className="fw-bold">{product.description}</span></p>
                        <p>Type: <span className="fw-bold">{product.type}</span></p>
                    </div>
            </div>
    )
}