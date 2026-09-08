import { Image } from 'react-native'
import { CategoriesSecion, Container, HighlightsSection, ProductsGrid, ProductsSection, Scroll, ScrollCategories, TextHighlight, TitleHighlight } from './style'
import logoType from '../../assets/icons/logotype.png'
import destaque1 from '../../assets/images/destaque-1.png'
import destaque2 from '../../assets/images/destaque-2.png'
import destaque3 from '../../assets/images/destaque-3.png'
import shoeIcon from '../../assets/icons/shoe-icon.png'
import headsetIcon from '../../assets/icons/headset-icon.png'
import gamesIcon from '../../assets/icons/games-icon.png'
import fridgeIcon from '../../assets/icons/fridge-icon.png'
import tShirtIcon from '../../assets/icons/t-shirt-icon.png'
import exel from '../../assets/images/exel.png'
import { CardCategory } from '../CardCategory'
import { ProductCard } from '../ProductCard'

const Home = () => {
    return (
        <Container>

            <Image source={logoType} />

            <HighlightsSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

                <Scroll horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={destaque1} />
                    <Image source={destaque2} />
                    <Image source={destaque3} />
                </Scroll>
            </HighlightsSection>

            <CategoriesSecion>
                <TitleHighlight>Nossos <TextHighlight>Categorias</TextHighlight></TitleHighlight>
                <ScrollCategories horizontal showsHorizontalScrollIndicator={false}>
                    <CardCategory image={shoeIcon} name={'Tênis'}></CardCategory>
                    <CardCategory image={headsetIcon} name={'Eletrônicos'}></CardCategory>
                    <CardCategory image={gamesIcon} name={'Games'}></CardCategory>
                    <CardCategory image={fridgeIcon} name={'Eletrodomésticos'}></CardCategory>
                    <CardCategory image={tShirtIcon} name={'Camisetas'}></CardCategory>
                </ScrollCategories>
            </CategoriesSecion>

            <ProductsSection>
                <TitleHighlight>Nossos <TextHighlight>Produtos</TextHighlight></TitleHighlight>
                <ProductsGrid>
                    <ProductCard image={exel} nome={'Faz planilha ae pai'} preco={'1499,00'}></ProductCard>
                    <ProductCard image={exel} nome={'Faz planilha ae pai'} preco={'1499,00'}></ProductCard>
                </ProductsGrid>
            </ProductsSection>
        </Container>
    )
}

export default Home