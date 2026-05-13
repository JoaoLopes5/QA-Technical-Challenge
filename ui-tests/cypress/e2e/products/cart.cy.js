import CartPage from "../../pages/CartPage";
import LoginPage from "../../pages/LoginPage";

describe('Fluxo de adicionar e remover iten do carrinho', () => {
    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login(
        'standard_user',
        'secret_sauce')

    });
    it('Deve adicionar iten no carrinho', () => {
        CartPage.adicionaraoCarrinho()
        CartPage.verificarCarrinho()
        CartPage.validaritenCarrinho()
    
    });

    it('Deve remover iten no carrinho', () => {
        CartPage.adicionaraoCarrinho()
        CartPage.verificarCarrinho()
        CartPage.removeritenCarrinho()
        CartPage.validaritenRemovido()
    });
});