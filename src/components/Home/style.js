import styled from "styled-components/native";

export const Container = styled.View`
    gap: 40px;
    padding-left: 20px;
`

export const HighlightsSection = styled.View`
    gap: 5px;
`

export const TitleHighlight = styled.Text`
    font-size: 25px;
    font-weight: bold;
`

export const TextHighlight = styled.Text`
    color: #375EE7;
`

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 20
    }
})``

export const CategoriesSecion = styled.View`
    gap: 18px;
    margin-bottom: 12px;
`

export const ScrollCategories = styled.ScrollView.attrs({
    contentContainerStyle: {
        flexDirection: 'row',
        gap: 8
    }
})``


export const ProductsSection = styled.View`
    gap: 8px;
`

export const ProductsGrid = styled.View`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 20px;
`

