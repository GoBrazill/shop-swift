import styled from "styled-components/native";

export const ProductBox = styled.View`
    width: 190px;
    border-radius: 7px;
    border: 1px solid #D4D4D4;
`

export const ProductImage = styled.Image`
    object-fit: cover;
    width: 188px;
    height: 111px;
`

export const ContainerDescription = styled.View`
    padding: 10px;
    gap: 12px;
`

export const ProductTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const PriceContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ProductPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #375EE7;
`

export const AddButton = styled.Pressable`
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 38px;

    border-radius: 50%;
    background-color: #375EE7;
`