import { View } from "react-native"
import { CardCategory } from "../CardCategory"
import shoeIcon from '../../assets/icons/shoe-icon.png'
import headsetIcon from '../../assets/icons/headset-icon.png'
import gamesIcon from '../../assets/icons/games-icon.png'
import fridgeIcon from '../../assets/icons/fridge-icon.png'
import tShirtIcon from '../../assets/icons/t-shirt-icon.png'

export const CategorySection = () => {
    return(
        <ContainerCategory>
            <TextTitle>Nossas <TextHighlight>Categorias</TextHighlight></TextTitle>
            <View>
                <CardCategory image={shoeIcon} name={'Tênis'}></CardCategory>
                <CardCategory image={headsetIcon} name={'Eletrônicos'}></CardCategory>
                <CardCategory image={gamesIcon} name={'Games'}></CardCategory>
                <CardCategory image={fridgeIcon} name={'Eletrodomésticos'}></CardCategory>
                <CardCategory image={tShirtIcon} name={'Camisetas'}></CardCategory>
            </View>
        </ContainerCategory>
    )
}