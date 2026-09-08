import { Image, View } from "react-native"
import plusIcon from '../../assets/icons/plus-icon.png'
import { AddButton, ContainerDescription, PriceContainer, ProductBox, ProductImage, ProductPrice, ProductTitle } from "./style"

export const ProductCard = ({ image, nome, preco }) => {
    return (
        <ProductBox>
            <ProductImage source={image} />

            <ContainerDescription>
                <ProductTitle>{nome}</ProductTitle>

                <PriceContainer>
                    <ProductPrice>R${preco}</ProductPrice>
                    <AddButton><Image source={plusIcon} /></AddButton>
                </PriceContainer>
            </ContainerDescription>

        </ProductBox>
    )
}