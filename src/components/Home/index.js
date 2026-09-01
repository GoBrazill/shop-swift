import { Image, ScrollView } from 'react-native'
import { CategoriesSecion, Container, HighlightsSection, Scroll, ScrollCategories, TextHighlight, TitleHighlight } from './style'
import logoType from '../../assets/icons/logotype.png'
import destaque1 from '../../assets/images/destaque-1.png'
import destaque2 from '../../assets/images/destaque-2.png'
import destaque3 from '../../assets/images/destaque-3.png'
import shoeIcon from '../../assets/icons/shoe-icon.png'

const Home = () => {
    return (
        <Container>

            <Image source={logoType} />


            <HighlightsSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

                <Scroll horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={destaque1}/>
                    <Image source={destaque2}/>
                    <Image source={destaque3}/>
                </Scroll>
            </HighlightsSection>
            <CategoriesSecion>
                <TitleHighlight>Nossos <TextHighlight>Categorias</TextHighlight></TitleHighlight>
                <ScrollCategories>
                    <CategorieCard>
                        <Image source={shoeIcon}/>
                        <CategorieText>Tênis</CategorieText>
                    </CategorieCard>
                </ScrollCategories>
            </CategoriesSecion>
        </Container>
    )
}

export default Home