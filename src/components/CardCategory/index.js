import { Image } from "react-native"
import { CardView, ImageCard, TextCategory } from "./style"

export const CardCategory = ({image, name}) => {
    return(
        <CardView>
            <ImageCard source={image}/>

            <TextCategory>{name}</TextCategory>
        </CardView>
    )
}