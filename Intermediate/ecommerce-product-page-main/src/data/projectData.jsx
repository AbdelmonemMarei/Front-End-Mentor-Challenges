
import iconCart from "../data/icons/icon-cart.svg";
import iconClose from "../data/icons/icon-close.svg";
import iconDelete from "../data/icons/icon-delete.svg";
import iconMenu from "../data/icons/icon-menu.svg";
import iconMinus from "../data/icons/icon-minus.svg";
import iconNext from "../data/icons/icon-next.svg";
import iconPlus from "../data/icons/icon-plus.svg";
import iconPrevious from "../data/icons/icon-previous.svg";
import logoIcon from "../data/icons/logo.svg";

import productOne from "../data/images/image-product-1.jpg";
import productTwo from "../data/images/image-product-2.jpg";
import productThree from "../data/images/image-product-3.jpg";
import productFour from "../data/images/image-product-4.jpg";
import productOneThum from "../data/images/image-product-1-thumbnail.jpg";
import productTwoThum from "../data/images/image-product-2-thumbnail.jpg";
import productThreeThum from "../data/images/image-product-3-thumbnail.jpg";
import productFourThum from "../data/images/image-product-4-thumbnail.jpg";

export const colors = {
    Primary:{
        Orange:'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)'
    },
    Neutral:{
        VeryDarkBlue: 'hsl(220, 13%, 13%)',
        DarkGrayishBlue:'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)'
    }
}
export const sidebarData = [ "Collections","Men","Women","About","Contact"]

export const images = [{
    id: 0,
    src: productOne,
    alt: "Image 1"
},
{
    id: 1,
    src: productTwo,
    alt: "Image 2 "
},
{
    id: 2,
    src: productThree,
    alt: "Image 3"
},
{
    id: 3,
    src: productFour,
    alt: "Image 4"
}];

export const imagesThum = [{
    id: 1,
    src: productOneThum,
    alt: "ImageThum 1"
},
{
    id: 2,
    src: productTwoThum,
    alt: "ImageThum 2 "
},
{
    id: 3,
    src: productThreeThum,
    alt: "ImageThum 3"
},
{
    id: 4,
    src: productFourThum,
    alt: "ImageThum 4"
}];

export const icons= { iconCart, iconClose, iconDelete, iconMenu, iconMinus, iconNext, iconPlus, iconPrevious, logoIcon };

